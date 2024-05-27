import { Apartment } from '../../../@types/service/apartmentTypes';

export interface ILocalApartmentsService {
  findAll(): Promise<Apartment[]>;
  findPopularListings(): Promise<Apartment[]>;
  findById(id: string): Promise<Apartment | null>;
}
