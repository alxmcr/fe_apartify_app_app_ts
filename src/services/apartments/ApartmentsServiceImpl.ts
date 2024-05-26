import { Apartment } from '../../@types/apartmentTypes';
import { isValidURL } from '../../helpers/appHttp';
import { IApartmentsService } from './IApartmentsService';

export class ApartmentsServiceImpl implements IApartmentsService {
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

    const response: Response = await fetch(`${this.baseUrl}`, options);

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

    const response: Response = await fetch(`${this.baseUrl}/${id}`, options);

    if (response.status === 200) {
      return response.json();
    }

    return Promise.reject(response);
  }
}
