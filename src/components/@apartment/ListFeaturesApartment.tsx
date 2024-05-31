import { LocalAttributeData } from '../../@types/service/serviceTypes';
import ListItemFeatureApartment from './ListItemFeatureApartment';

type Props = {
  features: LocalAttributeData[];
};

export default function ListFeaturesApartment({ features = [] }: Props) {
  return (
    <ul className="flex flex-col gap-4">
      {features.map((feature) => (
        <ListItemFeatureApartment key={feature.fe_feature} feature={feature} />
      ))}
    </ul>
  );
}
