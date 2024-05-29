import React, { useEffect } from 'react';
import { LoadingStates } from '../../../@types/service/enumsService';
import { LocalApartmentData } from '../../../@types/service/serviceTypes';
import { LocalApartmentsServiceImpl } from '../../../services/apartments/local/LocalApartmentsServiceImpl';

export const useLocalApartment = (id = '0') => {
  const [apartment, setApartment] = React.useState<LocalApartmentData | null>(null);
  const [errorApartment, setErrorApartment] = React.useState<Error | null>(null);
  const [loadingApartment, setStatusApartment] = React.useState(LoadingStates.IDLE);

  useEffect(() => {
    const fetchApartments = async () => {
      try {
        setStatusApartment(LoadingStates.PENDING);

        const service = new LocalApartmentsServiceImpl();
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
  }, [id]);

  return { apartment, loadingApartment, errorApartment };
};
