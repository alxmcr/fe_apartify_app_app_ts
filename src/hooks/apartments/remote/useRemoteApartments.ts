import React, { useEffect } from 'react';
import { Apartment } from '../../../@types/service/apartmentTypes';
import { LoadingStates } from '../../../@types/service/enumsService';
import { RemoteApartmentsServiceImpl } from '../../../services/apartments/remote/RemoteApartmentsServiceImpl';

export const useRemoteApartments = () => {
  const abortControllerRef = React.useRef<AbortController | null>(null);
  const [apartments, setApartments] = React.useState<Apartment[]>([]);
  const [errorApartments, setErrorApartments] = React.useState<Error | null>(null);
  const [loadingApartments, setStatusApartments] = React.useState(LoadingStates.IDLE);

  useEffect(() => {
    const abortController = new AbortController();
    abortControllerRef.current = abortController;

    const fetchApartments = async () => {
      try {
        setStatusApartments(LoadingStates.PENDING);

        const service = new RemoteApartmentsServiceImpl(abortController.signal);
        const apiApartments = await service.findAll();

        setApartments(apiApartments);
        setStatusApartments(LoadingStates.SUCCESS);
      } catch (error) {
        setStatusApartments(LoadingStates.ERROR);
        if (error instanceof Error && error.name === 'AbortError') {
          setErrorApartments(null);
        } else if (error instanceof Error) {
          setErrorApartments(error);
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
  }, []);

  return { apartments, loadingApartments, errorApartments };
};
