import { LocalApartmentData } from '../../../@types/service/serviceTypes';
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
        <img
          src={apartment?.ap_url}
          alt={`Photo by ${apartment.ap_description}`}
          className="h-[242px] w-full rounded-2xl bg-cover md:h-[204px] lg:h-[222px]"
        />
        <h1 className="text-[32px] font-bold text-electric-violet-600">
          {apartment?.ap_street_name}, Nro. {apartment?.ap_ext_number}
        </h1>
      </div>
    </BaseSection>
  );
}
