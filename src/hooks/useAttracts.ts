import { useEffect, useState } from 'react';
import { appHttp } from '../helpers/appHttp';
import { Attract } from '../@types/apartmentTypes';

export const useAttracts = (ap_apartment = 0) => {
  const [attracts, setAttracts] = useState<Attract[]>([]);
  const [errorAttracts, setErrorAttracts] = useState(null);
  const [loadingAttracts, setLoadingAttracts] = useState(false);
  const versionAPI = import.meta.env.VITE_API_VERSION;
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const url = `${baseURL}/${versionAPI}/attracts` || '';

  useEffect(() => {
    // Abort fetch
    const abortController = new AbortController();
    const { signal } = abortController;

    setLoadingAttracts(true);

    appHttp<Attract[]>(url, signal)
      .then((data) => {
        const featuresByApartment = data?.filter((attractItem) => {
          return attractItem?.ap_apartment === ap_apartment;
        });
        setAttracts(featuresByApartment);
      })
      .catch((error) => {
        if (error.name !== 'AbortError') {
          setErrorAttracts(error);
        }
      })
      .finally(() => setLoadingAttracts(false));

    // Clean up
    return function cancel() {
      abortController?.abort();
    };
  }, [url, ap_apartment]);

  return { attracts, loadingAttracts, errorAttracts };
};
