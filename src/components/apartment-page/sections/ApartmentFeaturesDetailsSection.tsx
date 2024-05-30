import { LocalApartmentData } from '../../../@types/service/serviceTypes';
import ListFeaturesApartment from '../../@apartment/ListFeaturesApartment';
import BaseSection from '../../BaseSection';

type Props = {
  apartment: LocalApartmentData;
};

export default function ApartmentFeaturesDetailsSection({ apartment }: Props) {
  if (apartment === null || apartment === undefined) {
    return null;
  }

  return (
    <BaseSection>
      <div className="flex flex-col gap-3 py-4">
        <h2 className="text-[32px] font-bold text-electric-violet-600">Features</h2>
        <ListFeaturesApartment features={apartment.rel_features} />
      </div>
    </BaseSection>
  );
}
