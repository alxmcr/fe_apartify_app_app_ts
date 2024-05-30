import { useParams } from 'react-router-dom';
import { useLocalApartment } from '../hooks/apartments/local/useLocalApartment';

export default function ApartmentPage() {
  const { id } = useParams();
  const { apartment, errorApartment, statusApartment } = useLocalApartment(id);

  return (
    <div>
      <h1>Apartment...</h1>
      <pre>{JSON.stringify({ apartment, errorApartment, statusApartment }, null, 2)}</pre>
    </div>
  );
}
