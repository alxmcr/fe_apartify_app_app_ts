import React, { useEffect } from 'react';
import { LoadingStates } from '../../../@types/service/enumsService';
import { LocalApartmentData } from '../../../@types/service/serviceTypes';
import { LocalApartmentsServiceImpl } from '../../../services/apartments/local/LocalApartmentsServiceImpl';

export const useLocalPopularListings = () => {
  const [popularApartments, setPopularApartments] = React.useState<LocalApartmentData[]>([]);
  const [errorPopularApartments, setErrorPopularApartments] = React.useState<Error | null>(null);
  const [statusPopularApartments, setStatusPopularApartments] = React.useState(LoadingStates.IDLE);

  useEffect(() => {
    const fetchApartments = async () => {
      try {
        setStatusPopularApartments(LoadingStates.PENDING);

        const service = new LocalApartmentsServiceImpl();
        const apiApartments = await service.findPopularListings();

        setPopularApartments(apiApartments);
        setStatusPopularApartments(LoadingStates.SUCCESS);
      } catch (error) {
        setStatusPopularApartments(LoadingStates.ERROR);
        if (error instanceof Error && error.name === 'AbortError') {
          setErrorPopularApartments(null);
        } else if (error instanceof Error) {
          setErrorPopularApartments(error);
        }
      }
    };

    // Fetch
    fetchApartments();
  }, []);

  return { popularApartments, statusPopularApartments, errorPopularApartments };
};
