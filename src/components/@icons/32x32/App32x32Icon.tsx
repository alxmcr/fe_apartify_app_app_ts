import Icon32x32Bathroom from './Icon32x32Bathroom';
import Icon32x32Bedroom from './Icon32x32Bedroom';
import Icon32x32FloorPlan from './Icon32x32FloorPlan';
import Icon32x32KeyVerticalRounded from './Icon32x32KeyVerticalRounded';
import Icon32x32Parking from './Icon32x32Parking';

type Props = {
  iconCode:
    | 'icon-floor-plan'
    | 'icon-bedroom'
    | 'icon-parking'
    | 'icon-bathroom'
    | 'icon-property-type'
    | 'icon-year-built'
    | 'icon-key-vertical-rounded';
};

export default function App32x32Icon({ iconCode = 'icon-floor-plan' }: Props) {
  switch (iconCode) {
    case 'icon-floor-plan': {
      return <Icon32x32FloorPlan />;
    }
    case 'icon-bedroom': {
      return <Icon32x32Bedroom />;
    }
    case 'icon-parking': {
      return <Icon32x32Parking />;
    }
    case 'icon-bathroom': {
      return <Icon32x32Bathroom />;
    }
    case 'icon-key-vertical-rounded': {
      return <Icon32x32KeyVerticalRounded />;
    }
    default:
      return null;
  }
}
