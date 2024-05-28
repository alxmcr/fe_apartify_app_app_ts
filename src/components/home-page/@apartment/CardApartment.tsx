import { LocalApartmentData } from '../../../@types/service/serviceTypes';

type Props = {
  apartment: LocalApartmentData;
};

export default function CardApartment({ apartment }: Props) {
  return (
    <article>
      <img src={apartment?.ap_url} alt={`Photo by ${apartment.ap_description}`} />
      <div>
        <h3>$${apartment?.ap_cost_offer}</h3>
        <span>$${apartment?.ap_cost_list}</span>
      </div>
      <p>{apartment?.ap_description}</p>
      <div>
        
      </div>
    </article>
  );
}
