import { LocalApartmentData } from '../../../@types/service/serviceTypes';
import ListOutdoorsApartment from '../../@apartment/ListOutdoorsApartment';
import BaseSection from '../../BaseSection';

type Props = {
  apartment: LocalApartmentData;
};

export default function ApartmentOutdoorsDetailsSection({ apartment }: Props) {
  if (apartment === null || apartment === undefined) {
    return null;
  }

  return (
    <BaseSection>
      <div className="flex flex-col gap-3 py-4">
        <h2 className="text-[32px] font-bold text-electric-violet-600">Outdoor spaces</h2>
        <ListOutdoorsApartment outdoors={apartment.rel_outdoor_spaces} />
      </div>
    </BaseSection>
  );
}
