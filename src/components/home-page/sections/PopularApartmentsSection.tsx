import { useLocalPopularListings } from '../../../hooks/apartments/local/useLocalPopularListings';
import BoxGroupApartments from '../../@apartments/BoxGroupApartments';

export default function PopularApartmentsSection() {
  const { popularApartments, loadingPopularApartments, errorPopularApartments } = useLocalPopularListings();

  return (
    <section>
      <BoxGroupApartments apartments={popularApartments} />
    </section>
  );
}
