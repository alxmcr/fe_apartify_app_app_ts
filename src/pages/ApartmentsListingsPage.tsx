import App24x24Icon from '../components/@icons/24x24/App24x24Icon';
import App28x28Icon from '../components/@icons/28x28/App28x28Icon';
import App32x32Icon from '../components/@icons/32x32/App32x32Icon';
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

      <hr />
      <div className="text-cerise-400">
        <App24x24Icon iconCode="icon-floor-plan" />
        <App24x24Icon iconCode="icon-bathroom" />
        <App24x24Icon iconCode="icon-bedroom" />
        <App24x24Icon iconCode="icon-parking" />
        <App24x24Icon iconCode="icon-key-vertical-rounded" />
      </div>
      <br />

      <hr />
      <div className="text-cerise-400">
        <App28x28Icon iconCode="icon-floor-plan" />
        <App28x28Icon iconCode="icon-bathroom" />
        <App28x28Icon iconCode="icon-bedroom" />
        <App28x28Icon iconCode="icon-parking" />
        <App28x28Icon iconCode="icon-key-vertical-rounded" />
      </div>
      <br />

      <hr />
      <div className="text-cerise-400">
        <App32x32Icon iconCode="icon-floor-plan" />
        <App32x32Icon iconCode="icon-bathroom" />
        <App32x32Icon iconCode="icon-bedroom" />
        <App32x32Icon iconCode="icon-parking" />
        <App32x32Icon iconCode="icon-key-vertical-rounded" />
      </div>
      <br />

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
