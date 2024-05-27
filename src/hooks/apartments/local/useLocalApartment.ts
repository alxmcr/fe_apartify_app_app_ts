import React, { useEffect } from 'react';
import { LoadingStates } from '../../../@types/service/enumsService';
import { LocalApartmentsServiceImpl } from '../../../services/apartments/local/LocalApartmentsServiceImpl';
import { Apartment } from '../../../@types/service/apartmentTypes';

export const useLocalApartment = (id = '0') => {
  const [apartment, setApartment] = React.useState<Apartment | null>(null);
  const [errorApartment, setErrorApartment] = React.useState<Error | null>(null);
  const [loadingApartment, setLoadingApartment] = React.useState(LoadingStates.IDLE);

  useEffect(() => {
    const fetchApartments = async () => {
      try {
        setLoadingApartment(LoadingStates.PENDING);

        const service = new LocalApartmentsServiceImpl();
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
  }, [id]);

  return { apartment, loadingApartment, errorApartment };
};
