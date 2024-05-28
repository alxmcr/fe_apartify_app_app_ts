import { LocalApartmentData, MockApartmentData } from '../@types/service/serviceTypes';

export const mapperMockApartmentDataToLocalApartment = (localApt: MockApartmentData) => {
  const apartment: LocalApartmentData = {
    ap_apartment: localApt.pk,
    ...localApt.fields,
  };

  return apartment;
};

export const mapperMockListLocalApartmentsDataToListApt = (listLocalApt: MockApartmentData[] = []) => {
  return listLocalApt.map((localApt) => {
    return mapperMockApartmentDataToLocalApartment(localApt);
  });
};
