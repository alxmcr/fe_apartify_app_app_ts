import { Apartment } from '../../../@types/apartmentTypes';

export interface ILocalApartmentsService {
  findAll(): Promise<Apartment[]>;
  findById(id: string): Promise<Apartment | null>;
}
