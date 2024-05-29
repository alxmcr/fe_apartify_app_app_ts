import { City, CityHall, Country, Neighborhood, State } from './apartmentTypes';

export type ResponseLocalApartmentData = {
  apartments: LocalApartmentData[];
};

export type LocalAttributeData = {
  fe_feature: number;
  fe_type: string;
  fe_name: string;
  fe_icon_code:
    | 'icon-floor-plan'
    | 'icon-bedroom'
    | 'icon-parking'
    | 'icon-bathroom'
    | 'icon-property-type'
    | 'icon-year-built';
  fe_icon_url: string;
  fe_icon_color: string;
  fe_is_in_card: boolean;
  att_value: string;
  att_is_visible: boolean;
  att_is_card: boolean;
};

export type LocalApartmentData = {
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
  rel_neighborhood: Neighborhood;
  rel_city: City;
  rel_city_hall: CityHall;
  rel_country: Country;
  rel_state: State;
  rel_features: LocalAttributeData[];
};

export type LocalApartmentFields = {
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
  rel_features: LocalAttributeData[];
};

export type MockApartmentData = {
  model: 'app_as_api.apartment';
  pk: number;
  fields: LocalApartmentFields;
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
