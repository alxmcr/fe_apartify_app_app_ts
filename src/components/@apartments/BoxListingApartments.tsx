import { LoadingStates } from '../../@types/service/enumsService';
import { useLocalApartments } from '../../hooks/apartments/local/useLocalApartments';
import BoxGroupApartments from './BoxGroupApartments';

export default function BoxListingApartments() {
  const { apartments, errorApartments, statusApartments } = useLocalApartments();

  if (LoadingStates.PENDING === statusApartments) {
    return <p>Loading Latest listings...</p>;
  }

  if (LoadingStates.ERROR === statusApartments && errorApartments) {
    return <p>I'm so sorry, I could not load apartments. Refresh page, please.</p>;
  }

  return (
    <div>
      <BoxGroupApartments apartments={apartments} />
    </div>
  );
}
