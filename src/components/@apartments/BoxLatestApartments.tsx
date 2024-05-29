import { LoadingStates } from '../../@types/service/enumsService';
import { useLocalLatestListings } from '../../hooks/apartments/local/useLocalLatestListings';

import BoxGroupApartments from './BoxGroupApartments';

export default function BoxLatestApartments() {
  const { latestApartments, statusLatestApartments, errorLatestApartments } = useLocalLatestListings();

  if (LoadingStates.PENDING === statusLatestApartments) {
    return <p>Loading Latest listings...</p>;
  }

  if (LoadingStates.ERROR === statusLatestApartments && errorLatestApartments) {
    return <p>I'm so sorry, I could not load Latest apartments. Refresh page, please.</p>;
  }

  return (
    <div>
      <BoxGroupApartments apartments={latestApartments} />
    </div>
  );
}
