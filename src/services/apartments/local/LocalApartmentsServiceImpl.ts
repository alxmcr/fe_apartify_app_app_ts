import {
  mapperListLocalApartmentsDataToListApt,
  mapperLocalApartmentDataToApartment,
} from '../../../@mappers/mapperLocalApartments';
import { Apartment } from '../../../@types/service/apartmentTypes';
import { LocalApartmentData } from '../../../@types/service/serviceTypes';
import mockLocalApartments from '../../../mocks/data/local/mock-local-apartments.json';
import mockLocalPopularListings from '../../../mocks/data/local/mock-local-popular-listings.json';
import mockLocalApartment001 from '../../../mocks/data/local/apartments/mock-local-apart-001.json';
import mockLocalApartment002 from '../../../mocks/data/local/apartments/mock-local-apart-002.json';
import mockLocalApartment003 from '../../../mocks/data/local/apartments/mock-local-apart-003.json';
import { ILocalApartmentsService } from './ILocalApartmentsService';

export class LocalApartmentsServiceImpl implements ILocalApartmentsService {
  async findAll(): Promise<Apartment[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          resolve(mapperListLocalApartmentsDataToListApt(mockLocalApartments as LocalApartmentData[]));
        } catch (error) {
          reject(error);
        }
      }, 300);
    });
  }

  async findPopularListings(): Promise<Apartment[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          resolve(mapperListLocalApartmentsDataToListApt(mockLocalPopularListings as LocalApartmentData[]));
        } catch (error) {
          reject(error);
        }
      }, 300);
    });
  }

  async findById(id = '0'): Promise<Apartment | null> {
    console.log('🚀 ~ LocalApartmentsServiceImpl ~ findById ~ id:', id);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          switch (id) {
            case '1':
              resolve(mapperLocalApartmentDataToApartment(mockLocalApartment001 as LocalApartmentData));
              break;
            case '2':
              resolve(mapperLocalApartmentDataToApartment(mockLocalApartment002 as LocalApartmentData));
              break;
            case '3':
              resolve(mapperLocalApartmentDataToApartment(mockLocalApartment003 as LocalApartmentData));
              break;
          }
        } catch (error) {
          reject(error);
        }
      }, 300);
    });
  }
}
