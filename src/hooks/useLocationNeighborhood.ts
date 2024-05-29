import { useEffect, useState } from 'react';
import { appHttp } from '../helpers/appHttp';
import { Neighborhood } from '../@types/service/apartmentTypes';

export const useLocationNeighborhood = (id: number) => {
  const [neighborhood, setNeighborhood] = useState<Neighborhood | null>(null);
  const [errorNeighborhood, setErrorNeighborhood] = useState(null);
  const [statusNeighborhood, setStatusNeighborhood] = useState(false);
  const versionAPI = import.meta.env.VITE_API_VERSION;
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const url = `${baseURL}/${versionAPI}/neighborhoods/${id}` || '';

  useEffect(() => {
    // Abort fetch
    const abortController = new AbortController();
    const { signal } = abortController;

    setStatusNeighborhood(true);
    appHttp<Neighborhood>(url, signal)
      .then((data) => {
        setNeighborhood(data);
      })
      .catch((error) => {
        if (error.name !== 'AbortError') {
          setErrorNeighborhood(error);
        }
      })
      .finally(() => setStatusNeighborhood(false));

    // Clean up
    return function cancel() {
      abortController?.abort();
    };
  }, [url]);

  return { neighborhood, statusNeighborhood, errorNeighborhood };
};
