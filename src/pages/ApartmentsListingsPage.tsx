import React from 'react';
import { Apartment } from '../@types/apartmentTypes';
import { LoadingStates } from '../@types/enumsService';
import { ApartmentsServiceImpl } from '../services/apartments/ApartmentsServiceImpl';

export default function ApartmentsListingsPage() {
  const [apartments, setApartments] = React.useState<Apartment[]>([]);
  const [errorApartments, setErrorApartments] = React.useState<Error | null>(null);
  const [loadingApartments, setLoadingApartments] = React.useState(LoadingStates.IDLE);

  React.useEffect(() => {
    let controller: AbortController | null = null;

    const fetchApartments = async () => {
      try {
        controller = new AbortController();
        const signal: AbortSignal = controller.signal;

        setLoadingApartments(LoadingStates.PENDING);

        const service = new ApartmentsServiceImpl(signal);
        const apiApartments = await service.findAll();

        setApartments(apiApartments);
        setLoadingApartments(LoadingStates.SUCCESS);
      } catch (error) {
        console.log('🚀 ~ fetchApartments ~ error:', error);
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
      if (controller !== null) {
        controller.abort();
      }
    };
  }, []);

  return (
    <main>
      <h1>Listings</h1>
      <pre>{JSON.stringify({ apartments, errorApartments, loadingApartments }, null, 2)}</pre>
    </main>
  );
}
