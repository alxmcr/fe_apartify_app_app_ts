import { useEffect, useState } from 'react';
import { appHttp } from '../helpers/appHttp';
import { City } from '../@types/service/apartmentTypes';

export const useLocationCity = (id = 0) => {
  const [city, setCity] = useState<City | null>(null);
  const [errorCity, setErrorCity] = useState(null);
  const [loadingCity, setLoadingCity] = useState(false);
  const versionAPI = import.meta.env.VITE_API_VERSION;
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const url = `${baseURL}/${versionAPI}/cities/${id}` || '';

  useEffect(() => {
    // Abort fetch
    const abortController = new AbortController();
    const { signal } = abortController;

    setLoadingCity(true);
    appHttp<City>(url, signal)
      .then((data) => {
        setCity(data);
      })
      .catch((error) => {
        if (error.name !== 'AbortError') {
          setErrorCity(error);
        }
      })
      .finally(() => setLoadingCity(false));

    // Clean up
    return function cancel() {
      abortController?.abort();
    };
  }, [url]);

  return { city, loadingCity, errorCity };
};
