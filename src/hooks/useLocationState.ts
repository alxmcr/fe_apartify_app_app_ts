import { useEffect, useState } from 'react';
import { appHttp } from '../helpers/appHttp';
import { State } from '../@types/apartmentTypes';

export const useLocationState = (id = 0) => {
  const [locationState, setLocationState] = useState<State | null>(null);
  const [errorLocationState, setErrorLocationState] = useState(null);
  const [loadingLocationState, setLoadingLocationState] = useState(false);
  const versionAPI = import.meta.env.VITE_API_VERSION;
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const url = `${baseURL}/${versionAPI}/states/${id}` || '';

  useEffect(() => {
    // Abort fetch
    const abortController = new AbortController();
    const { signal } = abortController;

    setLoadingLocationState(true);
    appHttp<State>(url, signal)
      .then((data) => {
        setLocationState(data);
      })
      .catch((error) => {
        if (error.name !== 'AbortError') {
          setErrorLocationState(error);
        }
      })
      .finally(() => setLoadingLocationState(false));

    // Clean up
    return function cancel() {
      abortController?.abort();
    };
  }, [url]);

  return { locationState, loadingLocationState, errorLocationState };
};
