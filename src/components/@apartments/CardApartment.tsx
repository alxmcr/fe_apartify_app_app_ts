import { LocalApartmentData } from '../../@types/service/serviceTypes';

type Props = {
  apartment: LocalApartmentData;
};

export default function CardApartment({ apartment }: Props) {
  return (
    <article className="h-[402px] w-[288px] md:h-[428px] md:w-[310px] lg:h-[444px] lg:w-[348px]">
      <img src={apartment?.ap_url} alt={`Photo by ${apartment.ap_description}`} />
      <div>
        <h3>{apartment?.ap_cost_offer}</h3>
        <span>{apartment?.ap_cost_list}</span>
      </div>
      <p>{apartment?.ap_street_name} {apartment?.ap_ext_number}</p>
      <div></div>
    </article>
  );
}
