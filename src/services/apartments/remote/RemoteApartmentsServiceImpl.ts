import { Apartment } from '../../../@types/service/apartmentTypes';
import { IRemoteApartmentsService } from './IRemoteApartmentsService';

export class RemoteApartmentsServiceImpl implements IRemoteApartmentsService {
  private baseUrl: string;
  private signal: AbortSignal;

  constructor(signalAS: AbortSignal) {
    const versionAPI = import.meta.env.VITE_API_VERSION;
    const baseURL = import.meta.env.VITE_API_BASE_URL;

    this.baseUrl = `${baseURL}/${versionAPI}/apartments` || '';
    this.signal = signalAS;
  }

  async findAll(): Promise<Apartment[]> {
    const options: RequestInit = {
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
      signal: this.signal,
    };

    const urlResource = `${this.baseUrl}`;
    const response: Response = await fetch(urlResource, options);
    console.log('🚀 ~ ApartmentsServiceImpl ~ findAll ~ urlResource:', urlResource);

    if (response.status === 200) {
      return response.json();
    }

    return Promise.reject(response);
  }

  async findById(id: string): Promise<Apartment | null> {
    const options: RequestInit = {
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
      signal: this.signal,
    };

    const urlResource = `${this.baseUrl}/${id}`;
    const response: Response = await fetch(urlResource, options);
    console.log('🚀 ~ ApartmentsServiceImpl ~ findById ~ urlResource:', urlResource);

    if (response.status === 200) {
      return response.json();
    }

    return Promise.reject(response);
  }
}
