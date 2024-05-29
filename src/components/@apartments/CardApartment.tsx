import { LocalApartmentData } from '../../@types/service/serviceTypes';
import App32x32Icon from '../@icons/32x32/App32x32Icon';

type Props = {
  apartment: LocalApartmentData;
};

export default function CardApartment({ apartment }: Props) {
  return (
    <article className="flex h-[350px] w-[288px] flex-col gap-[11px] rounded-2xl border md:h-[370px] md:w-[310px] lg:h-[396px] lg:w-[348px]">
      <img
        src={apartment?.ap_url}
        alt={`Photo by ${apartment.ap_description}`}
        className="h-[182px] w-full rounded-2xl bg-cover md:h-[204px] lg:h-[222px]"
      />
      <div className="flex flex-col gap-[28px] px-4">
        <div className="flex flex-col gap-[16px]">
          <div className="flex items-center justify-between">
            <h3 className="font-groteskspace text-[18px] font-bold text-electric-violet-600 md:text-[20px]">
              {apartment?.ap_cost_offer}
            </h3>
            <span className="font-groteskspace text-[18px] font-bold text-electric-violet-200 line-through md:text-[20px]">
              {apartment?.ap_cost_list}
            </span>
          </div>
          <p className="text-[16px]">
            {apartment?.ap_street_name} {apartment?.ap_ext_number}
          </p>
        </div>
        <div className="flex items-center justify-between gap-[4px]">
          {apartment.rel_features.map((feature) => (
            <div key={feature.fe_feature} className="flex items-center gap-[4px]">
              <span className="text-electric-violet-600">
                <App32x32Icon iconCode={feature.fe_icon_code} />
              </span>
              <span>{feature.att_value}</span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
