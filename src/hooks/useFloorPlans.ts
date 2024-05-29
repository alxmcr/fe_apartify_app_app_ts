import { useEffect, useState } from 'react';
import { appHttp } from '../helpers/appHttp';
import { FloorPlan } from '../@types/service/apartmentTypes';

export const useFloorPlans = (ap_apartment = 0) => {
  const [floorPlans, setFloorPlans] = useState<FloorPlan[]>([]);
  const [errorFloorPlans, setErrorFloorPlans] = useState(null);
  const [statusFloorPlans, setStatusFloorPlans] = useState(false);
  const versionAPI = import.meta.env.VITE_API_VERSION;
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const url = `${baseURL}/${versionAPI}/floor_plans` || '';

  useEffect(() => {
    // Abort fetch
    const abortController = new AbortController();
    const { signal } = abortController;

    setStatusFloorPlans(true);

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
      .finally(() => setStatusFloorPlans(false));

    // Clean up
    return function cancel() {
      abortController?.abort();
    };
  }, [url, ap_apartment]);

  return { floorPlans, statusFloorPlans, errorFloorPlans };
};
