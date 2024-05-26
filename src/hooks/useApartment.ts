import React, { useEffect } from 'react';
import { Apartment } from '../@types/apartmentTypes';
import { LoadingStates } from '../@types/enumsService';
import { ApartmentsServiceImpl } from '../services/apartments/ApartmentsServiceImpl';

export const useApartment = (id = '0') => {
  const abortControllerRef = React.useRef<AbortController | null>(null);
  const [apartment, setApartment] = React.useState<Apartment | null>(null);
  const [errorApartment, setErrorApartment] = React.useState<Error | null>(null);
  const [loadingApartment, setLoadingApartment] = React.useState(LoadingStates.IDLE);

  useEffect(() => {
    const abortController = new AbortController();
    abortControllerRef.current = abortController;

    const fetchApartments = async () => {
      try {
        setLoadingApartment(LoadingStates.PENDING);

        const service = new ApartmentsServiceImpl(abortController.signal);
        const apiApartment = await service.findById(id);

        setApartment(apiApartment);
        setLoadingApartment(LoadingStates.SUCCESS);
      } catch (error) {
        setLoadingApartment(LoadingStates.ERROR);
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
