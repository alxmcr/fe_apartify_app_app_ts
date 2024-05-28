import {
  mapperMockApartmentDataToLocalApartment,
  mapperMockListLocalApartmentsDataToListApt,
} from '../../../@mappers/mapperLocalApartments';
import { LocalApartmentData, MockApartmentData } from '../../../@types/service/serviceTypes';
import mockLocalApartment001 from '../../../mocks/data/local/apartments/mock-local-apart-001.json';
import mockLocalApartment002 from '../../../mocks/data/local/apartments/mock-local-apart-002.json';
import mockLocalApartment003 from '../../../mocks/data/local/apartments/mock-local-apart-003.json';
import mockLocalApartments from '../../../mocks/data/local/mock-local-apartments.json';
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
            mockLocalApartments as MockApartmentData[],
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
          }
        } catch (error) {
          reject(error);
        }
      }, 300);
    });
  }
}
