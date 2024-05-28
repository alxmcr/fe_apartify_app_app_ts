import { useLocalApartment } from '../hooks/apartments/local/useLocalApartment';
import { useLocalApartments } from '../hooks/apartments/local/useLocalApartments';
import { useLocalLatestListings } from '../hooks/apartments/local/useLocalLatestListing';
import { useLocalPopularListings } from '../hooks/apartments/local/useLocalPopularListings';

export default function ApartmentsListingsPage() {
  const { apartments, errorApartments, loadingApartments } = useLocalApartments();
  const { apartment, errorApartment, loadingApartment } = useLocalApartment('1');
  const { popularApartments, loadingPopularApartments, errorPopularApartments } = useLocalPopularListings();
  const { latestApartments, loadingLatestApartments, errorLatestApartments } = useLocalLatestListings();

  return (
    <main>
      <h1>Listings</h1>
      <pre>{JSON.stringify({ apartments, errorApartments, loadingApartments }, null, 2)}</pre>
      <span>----- APARTMENT ------</span>
      <pre>{JSON.stringify({ apartment, errorApartment, loadingApartment }, null, 2)}</pre>
      <img src={apartment?.ap_url} alt={''} />
      <span>----- POPULAR -----</span>
      <pre>
        {JSON.stringify({ popularApartments, loadingPopularApartments, errorPopularApartments }, null, 2)}
      </pre>
      <span>----- LATEST -----</span>
      <pre>
        {JSON.stringify({ latestApartments, loadingLatestApartments, errorLatestApartments }, null, 2)}
      </pre>
    </main>
  );
}
