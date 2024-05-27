import { useLocalApartment } from '../hooks/apartments/local/useLocalApartment';
import { useLocalApartments } from '../hooks/apartments/local/useLocalApartments';

export default function ApartmentsListingsPage() {
  const { apartments, errorApartments, loadingApartments } = useLocalApartments();
  const { apartment, errorApartment, loadingApartment } = useLocalApartment('1');

  return (
    <main>
      <h1>Listings</h1>
      <pre>{JSON.stringify({ apartments, errorApartments, loadingApartments }, null, 2)}</pre>
      <pre>{JSON.stringify({ apartment, errorApartment, loadingApartment }, null, 2)}</pre>
    </main>
  );
}
