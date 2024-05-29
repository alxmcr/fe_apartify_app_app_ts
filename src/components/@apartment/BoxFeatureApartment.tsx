import { LocalAttributeData } from '../../@types/service/serviceTypes';
import App32x32Icon from '../@icons/32x32/App32x32Icon';

type Props = {
  feature: LocalAttributeData;
};

export default function BoxFeatureApartment({ feature }: Props) {
  return (
    <div className="flex items-center gap-[4px]">
      <span className="text-electric-violet-600">
        <App32x32Icon iconCode={feature.fe_icon_code} />
      </span>
      <span>{feature.att_value}</span>
    </div>
  );
}
