import BoxPopularApartments from '../../@apartments/BoxPopularApartments';
import BaseSection from '../../BaseSection';

export default function PopularApartmentsSection() {
  return (
    <BaseSection>
      <div className="flex flex-col gap-[26px] py-5 md:gap-[46px]">
        <h2 className="text-[26px] font-bold md:text-[28px] lg:text-[36px]">
          {'Popular '}
          <span className="border border-x-0 border-t-0 border-electric-violet-600 font-bold  text-electric-violet-600">
            listings
          </span>
        </h2>
        <BoxPopularApartments />
      </div>
    </BaseSection>
  );
}
