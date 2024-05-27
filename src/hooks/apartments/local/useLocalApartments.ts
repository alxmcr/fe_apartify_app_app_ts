import React, { useEffect } from 'react';
import { Apartment } from '../../../@types/service/apartmentTypes';
import { LoadingStates } from '../../../@types/service/enumsService';
import { LocalApartmentsServiceImpl } from '../../../services/apartments/local/LocalApartmentsServiceImpl';

export const useLocalApartments = () => {
  const [apartments, setApartments] = React.useState<Apartment[]>([]);
  const [errorApartments, setErrorApartments] = React.useState<Error | null>(null);
  const [loadingApartments, setLoadingApartments] = React.useState(LoadingStates.IDLE);

  useEffect(() => {
    const fetchApartments = async () => {
      try {
        setLoadingApartments(LoadingStates.PENDING);

        const service = new LocalApartmentsServiceImpl();
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
  }, []);

  return { apartments, loadingApartments, errorApartments };
};
