import { Apartment } from '../../@types/apartmentTypes';

export interface IApartmentsService {
  findAll(): Promise<Apartment[]>;
  findById(id: string): Promise<Apartment | null>;
}
