import { useEffect, useState } from 'react';
import { appHttp } from '../helpers/appHttp';
import { FloorPlan } from '../@types/apartmentTypes';

export const useFloorPlans = (ap_apartment = 0) => {
  const [floorPlans, setFloorPlans] = useState<FloorPlan[]>([]);
  const [errorFloorPlans, setErrorFloorPlans] = useState(null);
  const [loadingFloorPlans, setLoadingFloorPlans] = useState(false);
  const versionAPI = import.meta.env.VITE_API_VERSION;
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const url = `${baseURL}/${versionAPI}/floor_plans` || '';

  useEffect(() => {
    // Abort fetch
    const abortController = new AbortController();
    const { signal } = abortController;

    setLoadingFloorPlans(true);

    appHttp<FloorPlan[]>(url, signal)
      .then((data) => {
        const floorPlansByApartment = data?.filter((attractItem) => {
          return attractItem?.ap_apartment === ap_apartment;
        });
        setFloorPlans(floorPlansByApartment);
      })
      .catch((error) => {
        if (error.name !== 'AbortError') {
          setErrorFloorPlans(error);
        }
      })
      .finally(() => setLoadingFloorPlans(false));

    // Clean up
    return function cancel() {
      abortController?.abort();
    };
  }, [url, ap_apartment]);

  return { floorPlans, loadingFloorPlans, errorFloorPlans };
};
