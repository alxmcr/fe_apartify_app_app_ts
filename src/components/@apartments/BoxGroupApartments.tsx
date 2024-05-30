import { LocalApartmentData } from '../../@types/service/serviceTypes';
import GroupApartments from './GroupApartments';

type Props = {
  apartments: LocalApartmentData[];
};

export default function BoxGroupApartments({ apartments = [] }: Props) {
  if (apartments.length === 0) {
    return <h3>No apartments</h3>;
  }

  return (
    <div>
      <GroupApartments apartments={apartments} />
    </div>
  );
}
