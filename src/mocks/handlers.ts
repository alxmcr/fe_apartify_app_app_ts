import { http, HttpResponse } from 'msw';
import mockApartments from './data/mock-apartments.json';
import mockApartment001 from './data/apartments/apartment-001.json';

const versionAPI = import.meta.env.VITE_API_VERSION;
const baseURL = import.meta.env.VITE_API_BASE_URL;

export const handlers = [
  // Intercept requests...

  http.get(`${baseURL}/${versionAPI}/apartments`, () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json(mockApartments);
  }),

  // Intercept requests...
  http.get(`${baseURL}/${versionAPI}/apartments/:id`, (req) => {
    const { id } = req.params;
    console.log('🚀 ~ http.get ~ id:', id);

    // ...and respond to them using this JSON response.
    return HttpResponse.json(mockApartment001);
  }),
];