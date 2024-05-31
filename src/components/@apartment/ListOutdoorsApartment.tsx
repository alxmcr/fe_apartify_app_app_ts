import { LocalOutdoorSpaceData } from '../../@types/service/serviceTypes';
import ListItemOutdoorApartment from './ListItemOutdoorApartment';

type Props = {
  outdoors: LocalOutdoorSpaceData[];
};

export default function ListOutdoorsApartment({ outdoors = [] }: Props) {
  return (
    <ul className="flex flex-col gap-4">
      {outdoors.map((outdoor) => (
        <ListItemOutdoorApartment key={outdoor.os_outdoor_space} outdoor={outdoor} />
      ))}
    </ul>
  );
}
