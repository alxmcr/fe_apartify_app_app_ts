import BoxLatestApartments from '../../@apartments/BoxLatestApartments';
import BaseSection from '../../BaseSection';

export default function LatestApartmentsSection() {
  return (
    <BaseSection>
      <div className="flex flex-col gap-[26px] py-5 md:gap-[46px]">
        <h2 className="text-[26px] font-bold md:text-[28px] lg:text-[36px]">
          {'Latest '}
          <span className="border border-x-0 border-t-0 border-electric-violet-600 font-bold  text-electric-violet-600">
            listings
          </span>
        </h2>
        <BoxLatestApartments />
      </div>
    </BaseSection>
  );
}
