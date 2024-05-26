import { useApartments } from '../hooks/useApartments';

export default function ApartmentsListingsPage() {
  const { apartments, errorApartments, loadingApartments } = useApartments();

  return (
    <main>
      <h1>Listings</h1>
      <pre>{JSON.stringify({ apartments, errorApartments, loadingApartments }, null, 2)}</pre>
    </main>
  );
}
