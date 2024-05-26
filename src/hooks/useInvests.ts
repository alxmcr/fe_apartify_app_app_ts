import { useEffect, useState } from 'react';
import { appHttp } from '../helpers/appHttp';
import { Invest } from '../@types/apartmentTypes';

export const useInvests = (ap_apartment = 0) => {
  const [invests, setInvests] = useState<Invest[]>([]);
  const [errorInvests, setErrorInvests] = useState(null);
  const [loadingInvests, setLoadingInvests] = useState(false);
  const versionAPI = import.meta.env.VITE_API_VERSION;
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const url = `${baseURL}/${versionAPI}/invests` || '';

  useEffect(() => {
    // Abort fetch
    const abortController = new AbortController();
    const { signal } = abortController;

    setLoadingInvests(true);

    appHttp<Invest[]>(url, signal)
      .then((data) => {
        const investSpacesByApartment = data?.filter((attractItem) => {
          return attractItem?.ap_apartment === ap_apartment;
        });
        setInvests(investSpacesByApartment);
      })
      .catch((error) => {
        if (error.name !== 'AbortError') {
          setErrorInvests(error);
        }
      })
      .finally(() => setLoadingInvests(false));

    // Clean up
    return function cancel() {
      abortController?.abort();
    };
  }, [url, ap_apartment]);

  return { invests, loadingInvests, errorInvests };
};
