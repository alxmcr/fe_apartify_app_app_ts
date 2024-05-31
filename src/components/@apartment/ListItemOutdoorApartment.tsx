import { LocalOutdoorSpaceData } from '../../@types/service/serviceTypes';

type Props = {
  outdoor: LocalOutdoorSpaceData;
};

export default function ListItemOutdoorApartment({ outdoor }: Props) {
  if (outdoor === null || outdoor === undefined) {
    return null;
  }

  return (
    <li className="flex items-center gap-4 text-[16px] md:text-[20px]">
      <span className="font-bold">{outdoor.ou_name}:</span>
      <span>{outdoor.out_value}</span>
    </li>
  );
}
