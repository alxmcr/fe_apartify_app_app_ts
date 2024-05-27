import { Apartment } from '../../../@types/service/apartmentTypes';

export interface IRemoteApartmentsService {
  findAll(): Promise<Apartment[]>;
  findById(id: string): Promise<Apartment | null>;
}
