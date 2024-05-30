import { LocalApartmentData } from '../../../@types/service/serviceTypes';
import BaseSection from '../../BaseSection';

type Props = {
  apartment: LocalApartmentData;
};

export default function ApartmentDescriptionSection({ apartment }: Props) {
  if (apartment === null || apartment === undefined) {
    return null;
  }

  return (
    <BaseSection>
      <div className="flex flex-col gap-3">
        <h2 className="text-[32px] font-bold text-electric-violet-600">Description</h2>
        <p className="font-groteskspace text-[18px] leading-8">{apartment.ap_description}</p>
      </div>
    </BaseSection>
  );
}
