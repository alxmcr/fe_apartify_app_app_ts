import { useEffect, useState } from 'react';
import { appHttp } from '../helpers/appHttp';
import { Photo } from '../@types/service/apartmentTypes';

export const usePhotos = (ap_apartment = 0) => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [errorPhotos, setErrorPhotos] = useState(null);
  const [loadingPhotos, setLoadingPhotos] = useState(false);
  const versionAPI = import.meta.env.VITE_API_VERSION;
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const url = `${baseURL}/${versionAPI}/photos` || '';

  useEffect(() => {
    // Abort fetch
    const abortController = new AbortController();
    const { signal } = abortController;

    setLoadingPhotos(true);

    appHttp<Photo[]>(url, signal)
      .then((data) => {
        const photosByApartment = data?.filter((photoItem) => {
          return photoItem?.ap_apartment === ap_apartment;
        });
        setPhotos(photosByApartment);
      })
      .catch((error) => {
        if (error.name !== 'AbortError') {
          setErrorPhotos(error);
        }
      })
      .finally(() => setLoadingPhotos(false));

    // Clean up
    return function cancel() {
      abortController?.abort();
    };
  }, [url, ap_apartment]);

  return { photos, loadingPhotos, errorPhotos };
};
