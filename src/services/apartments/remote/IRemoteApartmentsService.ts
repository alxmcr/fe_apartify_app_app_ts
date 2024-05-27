import { Apartment } from '../../../@types/apartmentTypes';

export interface IRemoteApartmentsService {
  findAll(): Promise<Apartment[]>;
  findById(id: string): Promise<Apartment | null>;
}
