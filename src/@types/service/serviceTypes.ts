import { City, CityHall, Country, Neighborhood, State } from './apartmentTypes';

export type ResponseLocalApartmentData = {
  apartments: LocalApartmentData[];
};

export type LocalApartmentData = {
  model: 'app_as_api.apartment';
  pk: 1;
  fields: {
    ap_description: string;
    ap_floor_number: number;
    ap_cost_offer: string;
    ap_cost_list: string;
    ap_is_remodeling: boolean;
    ap_latitude: number;
    ap_longitude: number;
    ap_url: string;
    ap_alt: string;
    ap_street_name: string;
    ap_ext_number: string;
    ap_int_number: string;
    rel_neighborhood: Neighborhood;
    rel_city: City;
    rel_city_hall: CityHall;
    rel_country: Country;
    rel_state: State;
  };
};

export type RemoteApartmentData = {
  ap_apartment: number;
  ap_description: string;
  ap_floor_number: number;
  ap_cost_offer: string;
  ap_cost_list: string;
  ap_is_remodeling: boolean;
  ap_latitude: number;
  ap_longitude: number;
  ap_url: string;
  ap_alt: string;
  ap_street_name: string;
  ap_ext_number: string;
  ap_int_number: string;
  ne_neighborhood: number;
  ci_city: number;
  ch_city_hall: number;
  co_country: number;
  st_state: number;
};
