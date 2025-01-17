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

export type LocalPhotoData = {
  ph_photo: number;
  ph_url: string;
  ph_alt: string;
  ph_is_cover: boolean;
  ap_apartment: number;
};

export type LocalOutdoorSpaceData = {
  os_outdoor_space: number;
  ou_type: string;
  ou_name: string;
  ou_icon_url: string;
  ou_icon_color: string;
  out_value: string;
  out_is_visible: boolean;
  out_is_card: boolean;
};

export type LocalInvestmentData = {
  inve_invest: number;
  in_type: string;
  in_name: string;
  in_icon_url: string;
  in_icon_color: string;
  inv_value: string;
  inv_is_visible: boolean;
  inv_is_card: boolean;
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
  rel_photos: LocalPhotoData[];
  rel_outdoor_spaces: LocalOutdoorSpaceData[];
  rel_invests: LocalInvestmentData[];
  fp_url: string;
  fp_alt: string;
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
  rel_photos: LocalPhotoData[];
  rel_outdoor_spaces: LocalOutdoorSpaceData[];
  rel_invests: LocalInvestmentData[];
  fp_url: string;
  fp_alt: string;
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
