import { LocalInvestmentData } from '../../@types/service/serviceTypes';
import ListItemInvestmentApartment from './ListItemInvestmentApartment';

type Props = {
  investments: LocalInvestmentData[];
};

export default function ListInvestmentsApartment({ investments: investments = [] }: Props) {
  return (
    <ul className="flex flex-col gap-4">
      {investments.map((investment) => (
        <ListItemInvestmentApartment key={investment.inve_invest} investment={investment} />
      ))}
    </ul>
  );
}
