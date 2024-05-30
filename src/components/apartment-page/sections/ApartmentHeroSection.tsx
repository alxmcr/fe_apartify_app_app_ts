import { LocalApartmentData } from '../../../@types/service/serviceTypes';
import BoxPhotoGalleryApartment from '../../@apartment/BoxPhotoGalleryApartment';
import GroupFeaturesApartment from '../../@apartment/GroupFeaturesApartment';
import BaseSection from '../../BaseSection';

type Props = {
  apartment: LocalApartmentData;
};
export default function ApartmentHeroSection({ apartment }: Props) {
  if (apartment === null || apartment === undefined) {
    return null;
  }

  return (
    <BaseSection>
      <div className="flex flex-col gap-[26px] border-b border-purple-600 pb-4 pt-24 md:gap-[16px]">
        <BoxPhotoGalleryApartment photos={apartment.rel_photos} />
        <h1 className="text-[32px] font-bold text-electric-violet-600">
          {apartment?.ap_street_name}, Nro. {apartment?.ap_ext_number}
        </h1>
        <GroupFeaturesApartment features={apartment.rel_features} />
      </div>
    </BaseSection>
  );
}
