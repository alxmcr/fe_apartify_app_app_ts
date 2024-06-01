import { LocalApartmentData } from '../../../@types/service/serviceTypes';
import BaseSection from '../../BaseSection';

type Props = {
  apartment: LocalApartmentData;
};

export default function ApartmentFloorPlanSection({ apartment }: Props) {
  if (apartment === null || apartment === undefined) {
    return null;
  }

  return (
    <BaseSection>
      <div className="flex flex-col gap-3">
        <h2 className="text-[32px] font-bold text-electric-violet-600">Distribution</h2>
        <img src={apartment.fp_url} alt={apartment.fp_alt} />
      </div>
    </BaseSection>
  );
}
