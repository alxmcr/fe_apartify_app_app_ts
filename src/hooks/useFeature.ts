import { useEffect, useState } from 'react';
import { appHttp } from '../helpers/appHttp';
import { Feature } from '../@types/service/apartmentTypes';

export const useFeature = (fe_feature = 0) => {
  const [feature, setFeature] = useState<Feature | null>(null);
  const [errorFeature, setErrorFeature] = useState(null);
  const [loadingFeature, setLoadingFeature] = useState(false);
  const versionAPI = import.meta.env.VITE_API_VERSION;
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const url = `${baseURL}/${versionAPI}/features/${fe_feature}` || '';

  useEffect(() => {
    // Abort fetch
    const abortController = new AbortController();
    const { signal } = abortController;

    setLoadingFeature(true);

    appHttp<Feature>(url, signal)
      .then((data) => {
        setFeature(data);
      })
      .catch((error) => {
        if (error.name !== 'AbortError') {
          setErrorFeature(error);
        }
      })
      .finally(() => setLoadingFeature(false));

    // Clean up
    return function cancel() {
      abortController?.abort();
    };
  }, [url, fe_feature]);

  return { feature, loadingFeature, errorFeature };
};
