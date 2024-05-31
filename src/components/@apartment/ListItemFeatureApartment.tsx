import { LocalAttributeData } from '../../@types/service/serviceTypes';

type Props = {
  feature: LocalAttributeData;
};

export default function ListItemFeatureApartment({ feature }: Props) {
  if (feature === null || feature === undefined) {
    return null;
  }

  return (
    <li className="flex items-center gap-4 text-[16px] md:text-[20px]">
      <span className="font-bold">{feature.fe_name}:</span>
      <span>{feature.att_value}</span>
    </li>
  );
}
