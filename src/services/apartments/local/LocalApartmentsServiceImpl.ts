import { Apartment } from '../../../@types/service/apartmentTypes';
import { ILocalApartmentsService } from './ILocalApartmentsService';

export class LocalApartmentsServiceImpl implements ILocalApartmentsService {
  async findAll(): Promise<Apartment[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          resolve([]);
        } catch (error) {
          reject(error);
        }
      }, 300);
    });
  }

  async findById(id: string): Promise<Apartment | null> {
    console.log('🚀 ~ LocalApartmentsServiceImpl ~ findById ~ id:', id);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          resolve(null);
        } catch (error) {
          reject(error);
        }
      }, 300);
    });
  }
}
