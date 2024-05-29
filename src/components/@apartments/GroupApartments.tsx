import { LocalApartmentData } from '../../@types/service/serviceTypes';
import CardApartment from '../@apartment/CardApartment';

type Props = {
  apartments: LocalApartmentData[];
};

export default function GroupApartments({ apartments = [] }: Props) {
  return (
    <div className="flex flex-col flex-wrap gap-[44px] md:grid md:grid-cols-2">
      {apartments.map((apartment) => (
        <CardApartment key={apartment.ap_apartment} apartment={apartment} />
      ))}
    </div>
  );
}
