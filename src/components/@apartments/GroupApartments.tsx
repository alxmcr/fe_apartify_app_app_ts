import { NavLink } from 'react-router-dom';
import { LocalApartmentData } from '../../@types/service/serviceTypes';
import CardApartment from '../@apartment/CardApartment';

type Props = {
  apartments: LocalApartmentData[];
};

export default function GroupApartments({ apartments = [] }: Props) {
  return (
    <div className="flex flex-col flex-wrap gap-[44px] md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-[18px]">
      {apartments.map((apartment) => (
        <NavLink key={apartment.ap_apartment} to={`/apartments/${apartment.ap_apartment}`}>
          <CardApartment apartment={apartment} />
        </NavLink>
      ))}
    </div>
  );
}
