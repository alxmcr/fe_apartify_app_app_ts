import React, { useEffect } from 'react';
import { Apartment } from '../../../@types/service/apartmentTypes';
import { LoadingStates } from '../../../@types/service/enumsService';
import { RemoteApartmentsServiceImpl } from '../../../services/apartments/remote/RemoteApartmentsServiceImpl';

export const useRemoteApartment = (id = '0') => {
  const abortControllerRef = React.useRef<AbortController | null>(null);
  const [apartment, setApartment] = React.useState<Apartment | null>(null);
  const [errorApartment, setErrorApartment] = React.useState<Error | null>(null);
  const [loadingApartment, setStatusApartment] = React.useState(LoadingStates.IDLE);

  useEffect(() => {
    const abortController = new AbortController();
    abortControllerRef.current = abortController;

    const fetchApartments = async () => {
      try {
        setStatusApartment(LoadingStates.PENDING);

        const service = new RemoteApartmentsServiceImpl(abortController.signal);
        const apiApartment = await service.findById(id);

        setApartment(apiApartment);
        setStatusApartment(LoadingStates.SUCCESS);
      } catch (error) {
        setStatusApartment(LoadingStates.ERROR);
        if (error instanceof Error && error.name === 'AbortError') {
          setErrorApartment(null);
        } else if (error instanceof Error) {
          setErrorApartment(error);
        }
      }
    };

    // Fetch
    fetchApartments();

    // Clean up
    return () => {
      // Abort the request when the component unmounts or the effect is re-run
      abortController.abort();
    };
  }, [id]);

  return { apartment, loadingApartment, errorApartment };
};
