import { LocalApartmentData } from '../../../@types/service/serviceTypes';
import ListInvestmentsApartment from '../../@apartment/ListInvestmentsApartment';
import BaseSection from '../../BaseSection';

type Props = {
  apartment: LocalApartmentData;
};

export default function ApartmentInvestmentsSection({ apartment }: Props) {
  if (apartment === null || apartment === undefined) {
    return null;
  }

  return (
    <BaseSection>
      <div className="flex flex-col gap-3 py-4">
        <h2 className="text-[32px] font-bold text-electric-violet-600">Investments</h2>
        <ListInvestmentsApartment investments={apartment.rel_invests} />
      </div>
    </BaseSection>
  );
}
