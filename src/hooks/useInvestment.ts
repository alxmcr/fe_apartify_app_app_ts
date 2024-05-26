import { useEffect, useState } from 'react';
import { appHttp } from '../helpers/appHttp';
import { Investment } from '../@types/apartmentTypes';

export const useInvestment = (in_investment = 0) => {
  const [investment, setInvestment] = useState<Investment | null>(null);
  const [errorInvestment, setErrorInvestment] = useState(null);
  const [loadingInvestment, setLoadingInvestment] = useState(false);
  const versionAPI = import.meta.env.VITE_API_VERSION;
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const url = `${baseURL}/${versionAPI}/investments/${in_investment}` || '';

  useEffect(() => {
    // Abort fetch
    const abortController = new AbortController();
    const { signal } = abortController;

    setLoadingInvestment(true);

    appHttp<Investment>(url, signal)
      .then((data) => {
        setInvestment(data);
      })
      .catch((error) => {
        if (error.name !== 'AbortError') {
          setErrorInvestment(error);
        }
      })
      .finally(() => setLoadingInvestment(false));

    // Clean up
    return function cancel() {
      abortController?.abort();
    };
  }, [url]);

  return { investment, loadingInvestment, errorInvestment };
};
