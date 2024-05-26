import { useEffect, useState } from 'react';
import { appHttp } from '../helpers/appHttp';
import { Country } from '../@types/apartmentTypes';

export const useLocationCountry = (id = 0) => {
  const [country, setCountry] = useState<Country>();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const versionAPI = import.meta.env.VITE_API_VERSION;
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const url = `${baseURL}/${versionAPI}/countries/${id}` || '';

  useEffect(() => {
    // Abort fetch
    const abortController = new AbortController();
    const { signal } = abortController;

    setLoading(true);
    appHttp<Country>(url, signal)
      .then((data) => {
        setCountry(data);
      })
      .catch((error) => {
        if (error.name !== 'AbortError') {
          setError(error);
        }
      })
      .finally(() => setLoading(false));

    // Clean up
    return function cancel() {
      abortController?.abort();
    };
  }, [url]);

  return { country, loading, error };
};
