import { Apartment } from '../../../@types/service/apartmentTypes';
import { ILocalApartmentsService } from './ILocalApartmentsService';
import mockApartments from '../../../mocks/data/mock-apartments.json';

export class LocalApartmentsServiceImpl implements ILocalApartmentsService {
  async findAll(): Promise<Apartment[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          resolve(mockApartments as Apartment[]);
        } catch (error) {
          reject(error);
        }
      }, 300);
    });
  }

  async findById(id: string): Promise<Apartment | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([...productsDany, ...productsEmily]);
      }, 300);
    });
  }
}
