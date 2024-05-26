import React, { useEffect } from 'react';
import { Apartment } from '../@types/apartmentTypes';
import { LoadingStates } from '../@types/enumsService';
import { ApartmentsServiceImpl } from '../services/apartments/ApartmentsServiceImpl';

export const useApartments = () => {
  const abortControllerRef = React.useRef<AbortController | null>(null);
  const [apartments, setApartments] = React.useState<Apartment[]>([]);
  const [errorApartments, setErrorApartments] = React.useState<Error | null>(
    null,
  );
  const [loadingApartments, setLoadingApartments] = React.useState(
    LoadingStates.IDLE,
  );

  useEffect(() => {
    const abortController = new AbortController();
    abortControllerRef.current = abortController;

    const fetchApartments = async () => {
      try {
        setLoadingApartments(LoadingStates.PENDING);

        const service = new ApartmentsServiceImpl(abortController);
        const apiApartments = await service.findAll();

        setApartments(apiApartments);
        setLoadingApartments(LoadingStates.SUCCESS);
      } catch (error) {
        setLoadingApartments(LoadingStates.ERROR);
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
