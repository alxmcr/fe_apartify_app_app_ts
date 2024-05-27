import { Apartment } from '../@types/service/apartmentTypes';
import { LocalApartmentData } from '../@types/service/serviceTypes';

export const mapperLocalApartmentDataToApartment = (localApt: LocalApartmentData) => {
  const apartment: Apartment = {
    ap_apartment: localApt.pk,
    ...localApt.fields,
  };

  return apartment;
};

export const mapperListLocalApartmentsDataToListApt = (listLocalApt: LocalApartmentData[] = []) => {
  return listLocalApt.map((localApt) => {
    return mapperLocalApartmentDataToApartment(localApt);
  });
};
