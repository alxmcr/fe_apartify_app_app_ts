import { useParams } from 'react-router-dom';
import { useLocalApartment } from '../hooks/apartments/local/useLocalApartment';

export default function ApartmentPage() {
  const { id } = useParams();
  const { apartment, errorApartment, loadingApartment } = useLocalApartment(id);

  return (
    <main>
      <h1>Apartment...</h1>
      <pre>{JSON.stringify({ apartment, errorApartment, loadingApartment }, null, 2)}</pre>
    </main>
  );
}
