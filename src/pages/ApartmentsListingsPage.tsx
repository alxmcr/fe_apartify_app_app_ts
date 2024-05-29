import CardApartment from '../components/@apartments/CardApartment';
import { useLocalApartment } from '../hooks/apartments/local/useLocalApartment';

export default function ApartmentsListingsPage() {
  const { apartment } = useLocalApartment('1');

  return <main>{apartment !== null ? <CardApartment apartment={apartment} /> : null}</main>;
}
