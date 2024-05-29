import React, { useEffect } from 'react';
import { LoadingStates } from '../../../@types/service/enumsService';
import { LocalApartmentData } from '../../../@types/service/serviceTypes';
import { LocalApartmentsServiceImpl } from '../../../services/apartments/local/LocalApartmentsServiceImpl';

export const useLocalLatestListings = () => {
  const [latestApartments, setLatestApartments] = React.useState<LocalApartmentData[]>([]);
  const [errorLatestApartments, setErrorLatestApartments] = React.useState<Error | null>(null);
  const [loadingLatestApartments, setStatusLatestApartments] = React.useState(LoadingStates.IDLE);

  useEffect(() => {
    const fetchApartments = async () => {
      try {
        setStatusLatestApartments(LoadingStates.PENDING);

        const service = new LocalApartmentsServiceImpl();
        const apiApartments = await service.findLatestListings();

        setLatestApartments(apiApartments);
        setStatusLatestApartments(LoadingStates.SUCCESS);
      } catch (error) {
        setStatusLatestApartments(LoadingStates.ERROR);
        if (error instanceof Error && error.name === 'AbortError') {
          setErrorLatestApartments(null);
        } else if (error instanceof Error) {
          setErrorLatestApartments(error);
        }
      }
    };

    // Fetch
    fetchApartments();
  }, []);

  return { latestApartments, loadingLatestApartments, errorLatestApartments };
};
