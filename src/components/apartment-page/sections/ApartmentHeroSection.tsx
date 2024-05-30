import { LocalApartmentData } from '../../../@types/service/serviceTypes';
import BoxPhotoGalleryApartment from '../../@apartment/BoxPhotoGalleryApartment';
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
      <div className="flex h-screen flex-col gap-[26px] py-24 md:gap-[46px]">
        <BoxPhotoGalleryApartment photos={apartment.rel_photos} />
        <h1 className="text-[32px] font-bold text-electric-violet-600">
          {apartment?.ap_street_name}, Nro. {apartment?.ap_ext_number}
        </h1>
      </div>
    </BaseSection>
  );
}
