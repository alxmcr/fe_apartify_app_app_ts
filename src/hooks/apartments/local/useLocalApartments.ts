import React, { useEffect } from 'react';
import { LoadingStates } from '../../../@types/service/enumsService';
import { LocalApartmentData } from '../../../@types/service/serviceTypes';
import { LocalApartmentsServiceImpl } from '../../../services/apartments/local/LocalApartmentsServiceImpl';

export const useLocalApartments = () => {
  const [apartments, setApartments] = React.useState<LocalApartmentData[]>([]);
  const [errorApartments, setErrorApartments] = React.useState<Error | null>(null);
  const [statusApartments, setStatusApartments] = React.useState(LoadingStates.IDLE);

  useEffect(() => {
    const fetchApartments = async () => {
      try {
        setStatusApartments(LoadingStates.PENDING);

        const service = new LocalApartmentsServiceImpl();
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
  }, []);

  return { apartments, statusApartments, errorApartments };
};
