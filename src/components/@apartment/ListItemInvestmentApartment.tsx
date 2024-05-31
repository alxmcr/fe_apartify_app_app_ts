import { LocalInvestmentData } from '../../@types/service/serviceTypes';

type Props = {
  investment: LocalInvestmentData;
};

export default function ListItemInvestmentApartment({ investment }: Props) {
  if (investment === null || investment === undefined) {
    return null;
  }

  return (
    <li className="flex items-center gap-4 text-[16px] md:text-[20px]">
      <span className="font-bold">{investment.in_name}:</span>
      <span>{investment.inv_value}</span>
    </li>
  );
}
