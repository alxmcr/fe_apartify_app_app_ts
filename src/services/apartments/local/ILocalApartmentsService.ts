import { LocalApartmentData } from '../../../@types/service/serviceTypes';

export interface ILocalApartmentsService {
  findAll(): Promise<LocalApartmentData[]>;
  findPopularListings(): Promise<LocalApartmentData[]>;
  findLatestListings(): Promise<LocalApartmentData[]>;
  findById(id: string): Promise<LocalApartmentData | null>;
}
