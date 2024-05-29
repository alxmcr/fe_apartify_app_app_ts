import { LocalAttributeData } from '../../@types/service/serviceTypes';
import BoxFeatureApartment from './BoxFeatureApartment';

type Props = {
  features: LocalAttributeData[];
};

export default function GroupFeaturesApartment({ features = [] }: Props) {
  if (features.length < 4) {
    return null;
  }

  return (
    <div className="flex items-center justify-between gap-[4px]">
      {features.slice(0, 4).map((feature) => (
        <BoxFeatureApartment key={feature.fe_feature} feature={feature} />
      ))}
    </div>
  );
}
