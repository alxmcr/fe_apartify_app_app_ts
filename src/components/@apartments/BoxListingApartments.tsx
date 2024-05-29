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
    <div className="flex flex-col gap-7">
      <h2 className="text-[26px] font-bold md:text-[28px] lg:text-[36px]">
        {'Apartments '}
        <span className="border border-x-0 border-t-0 border-electric-violet-600 font-bold  text-electric-violet-600">
          ({apartments.length})
        </span>
      </h2>
      <BoxGroupApartments apartments={apartments} />
    </div>
  );
}
