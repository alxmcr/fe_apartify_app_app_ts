import { useEffect, useState } from 'react';
import { appHttp } from '../helpers/appHttp';
import { Photo } from '../@types/service/apartmentTypes';

export const usePhotos = (ap_apartment = 0) => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [errorPhotos, setErrorPhotos] = useState(null);
  const [statusPhotos, setStatusPhotos] = useState(false);
  const versionAPI = import.meta.env.VITE_API_VERSION;
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const url = `${baseURL}/${versionAPI}/photos` || '';

  useEffect(() => {
    // Abort fetch
    const abortController = new AbortController();
    const { signal } = abortController;

    setStatusPhotos(true);

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
      .finally(() => setStatusPhotos(false));

    // Clean up
    return function cancel() {
      abortController?.abort();
    };
  }, [url, ap_apartment]);

  return { photos, statusPhotos, errorPhotos };
};
