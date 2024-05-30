import {
  mapperMockApartmentDataToLocalApartment,
  mapperMockListLocalApartmentsDataToListApt,
} from '../../../@mappers/mapperLocalApartments';
import { LocalApartmentData, MockApartmentData } from '../../../@types/service/serviceTypes';
import mockLocalApartment001 from '../../../mocks/data/local/apartments/mock-local-apart-001.json';
import mockLocalApartment002 from '../../../mocks/data/local/apartments/mock-local-apart-002.json';
import mockLocalApartment003 from '../../../mocks/data/local/apartments/mock-local-apart-003.json';
import mockLocalApartment004 from '../../../mocks/data/local/apartments/mock-local-apart-004.json';
import mockLocalApartment005 from '../../../mocks/data/local/apartments/mock-local-apart-005.json';
import mockLocalApartment006 from '../../../mocks/data/local/apartments/mock-local-apart-006.json';
import mockLocalApartment007 from '../../../mocks/data/local/apartments/mock-local-apart-007.json';
import mockLocalApartment008 from '../../../mocks/data/local/apartments/mock-local-apart-008.json';
import mockLocalApartment009 from '../../../mocks/data/local/apartments/mock-local-apart-009.json';
import mockLocalApartment010 from '../../../mocks/data/local/apartments/mock-local-apart-010.json';
import mockLocalApartments from '../../../mocks/data/local/mock-local-apartments.json';
import mockLocalLatestListings from '../../../mocks/data/local/mock-local-latest-listings.json';
import mockLocalPopularListings from '../../../mocks/data/local/mock-local-popular-listings.json';
import { ILocalApartmentsService } from './ILocalApartmentsService';

export class LocalApartmentsServiceImpl implements ILocalApartmentsService {
  async findAll(): Promise<LocalApartmentData[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          const apartments = mapperMockListLocalApartmentsDataToListApt(
            mockLocalApartments as MockApartmentData[],
          );

          resolve(apartments);
        } catch (error) {
          reject(error);
        }
      }, 300);
    });
  }

  async findPopularListings(): Promise<LocalApartmentData[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          const mockDataTransformed = mapperMockListLocalApartmentsDataToListApt(
            mockLocalPopularListings as MockApartmentData[],
          );
          resolve(mockDataTransformed);
        } catch (error) {
          reject(error);
        }
      }, 300);
    });
  }

  async findLatestListings(): Promise<LocalApartmentData[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          const mockDataTransformed = mapperMockListLocalApartmentsDataToListApt(
            mockLocalLatestListings as MockApartmentData[],
          );
          resolve(mockDataTransformed);
        } catch (error) {
          reject(error);
        }
      }, 300);
    });
  }

  async findById(id = '0'): Promise<LocalApartmentData | null> {
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
            case '4':
              resolve(mapperMockApartmentDataToLocalApartment(mockLocalApartment004 as MockApartmentData));
              break;
            case '5':
              resolve(mapperMockApartmentDataToLocalApartment(mockLocalApartment005 as MockApartmentData));
              break;
            case '6':
              resolve(mapperMockApartmentDataToLocalApartment(mockLocalApartment006 as MockApartmentData));
              break;
            case '7':
              resolve(mapperMockApartmentDataToLocalApartment(mockLocalApartment007 as MockApartmentData));
              break;
            case '8':
              resolve(mapperMockApartmentDataToLocalApartment(mockLocalApartment008 as MockApartmentData));
              break;
            case '9':
              resolve(mapperMockApartmentDataToLocalApartment(mockLocalApartment009 as MockApartmentData));
              break;
            case '10':
              resolve(mapperMockApartmentDataToLocalApartment(mockLocalApartment010 as MockApartmentData));
              break;
          }
        } catch (error) {
          reject(error);
        }
      }, 300);
    });
  }
}
