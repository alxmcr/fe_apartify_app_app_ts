import BoxListingApartments from '../../@apartments/BoxListingApartments';
import BaseSection from '../../BaseSection';

export default function ListingApartmentsSection() {
  return (
    <BaseSection>
      <div className="flex h-screen flex-col gap-[26px] py-24 md:gap-[46px]">
        <BoxListingApartments />
      </div>
    </BaseSection>
  );
}
