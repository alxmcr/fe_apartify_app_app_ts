import { LocalApartmentData } from '../../@types/service/serviceTypes';
import GroupFeaturesApartment from './GroupFeaturesApartment';

type Props = {
  apartment: LocalApartmentData;
};

export default function CardApartment({ apartment }: Props) {
  return (
    <article className="flex w-full flex-col gap-[11px] rounded-2xl border md:h-[420px] md:w-[330px] lg:h-[440px] lg:w-[326px]">
      <img
        src={apartment?.ap_url}
        alt={`Photo by ${apartment.ap_alt}`}
        className="h-[242px] w-full rounded-2xl bg-cover md:h-[204px] lg:h-[222px]"
      />
      <div className="flex flex-col gap-[28px] px-4 py-6">
        <div className="flex flex-col gap-[16px]">
          <div className="flex items-center justify-between">
            <h3 className="font-groteskspace text-[18px] font-bold text-electric-violet-600 md:text-[20px]">
              {apartment?.ap_cost_offer}
            </h3>
            <span className="font-groteskspace text-[18px] font-bold text-electric-violet-300 line-through md:text-[20px]">
              {apartment?.ap_cost_list}
            </span>
          </div>
          <p className="h-[48px] text-[16px]">
            {apartment?.ap_street_name}, Nro. {apartment?.ap_ext_number}
          </p>
        </div>
        <GroupFeaturesApartment features={apartment.rel_features} />
      </div>
    </article>
  );
}
