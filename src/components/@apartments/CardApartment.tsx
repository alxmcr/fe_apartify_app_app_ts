import { LocalApartmentData } from '../../@types/service/serviceTypes';

type Props = {
  apartment: LocalApartmentData;
};

export default function CardApartment({ apartment }: Props) {
  return (
    <article className="h-[402px] w-[288px] border md:h-[428px] md:w-[310px] lg:h-[444px] lg:w-[348px]">
      <img
        src={apartment?.ap_url}
        alt={`Photo by ${apartment.ap_description}`}
        className="h-[182px] w-full rounded-2xl bg-cover md:h-[204px] lg:h-[222px]"
      />
      <div className="flex items-center justify-between">
        <h3 className="font-groteskspace text-[18px] font-bold text-electric-violet-600">
          {apartment?.ap_cost_offer}
        </h3>
        <span className="font-groteskspace text-[18px] font-bold text-electric-violet-200 line-through">
          {apartment?.ap_cost_list}
        </span>
      </div>
      <p>
        {apartment?.ap_street_name} {apartment?.ap_ext_number}
      </p>
      <div></div>
    </article>
  );
}
