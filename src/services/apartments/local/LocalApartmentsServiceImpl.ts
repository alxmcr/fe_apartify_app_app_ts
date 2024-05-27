import {
  mapperMockListLocalApartmentsDataToListApt,
  mapperMockApartmentDataToLocalApartment,
} from '../../../@mappers/mapperLocalApartments';
import { Apartment } from '../../../@types/service/apartmentTypes';
import { MockApartmentData } from '../../../@types/service/serviceTypes';
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
          resolve(mapperMockListLocalApartmentsDataToListApt(mockLocalApartments as MockApartmentData[]));
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
          resolve(mapperMockListLocalApartmentsDataToListApt(mockLocalPopularListings as MockApartmentData[]));
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
              resolve(mapperMockApartmentDataToLocalApartment(mockLocalApartment001 as MockApartmentData));
              break;
            case '2':
              resolve(mapperMockApartmentDataToLocalApartment(mockLocalApartment002 as MockApartmentData));
              break;
            case '3':
              resolve(mapperMockApartmentDataToLocalApartment(mockLocalApartment003 as MockApartmentData));
              break;
          }
        } catch (error) {
          reject(error);
        }
      }, 300);
    });
  }
}
