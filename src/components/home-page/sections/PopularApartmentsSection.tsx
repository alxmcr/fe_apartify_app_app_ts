import { LoadingStates } from '../../../@types/service/enumsService';
import { useLocalPopularListings } from '../../../hooks/apartments/local/useLocalPopularListings';
import BoxGroupApartments from '../../@apartments/BoxGroupApartments';

export default function PopularApartmentsSection() {
  const { popularApartments, statusPopularApartments, errorPopularApartments } = useLocalPopularListings();

  if (LoadingStates.PENDING === statusPopularApartments) {
    return <p>Loading popular listings...</p>;
  }

  if (LoadingStates.ERROR === statusPopularApartments && errorPopularApartments) {
    return <p>I'm so sorry, I could not load popular apartments. Refresh page, please.</p>;
  }

  return (
    <section>
      <BoxGroupApartments apartments={popularApartments} />
    </section>
  );
}
