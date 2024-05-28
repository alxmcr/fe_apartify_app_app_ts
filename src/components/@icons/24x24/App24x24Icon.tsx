import Icon24x24Bathroom from './Icon24x24Bathroom';
import Icon24x24Bedroom from './Icon24x24Bedroom';
import Icon24x24FloorPlan from './Icon24x24FloorPlan';
import Icon24x24KeyVerticalRounded from './Icon24x24KeyVerticalRounded';
import Icon24x24Parking from './Icon24x24Parking';

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

export default function App24x24Icon({ iconCode = 'icon-floor-plan' }: Props) {
  switch (iconCode) {
    case 'icon-floor-plan': {
      return <Icon24x24FloorPlan />;
    }
    case 'icon-bedroom': {
      return <Icon24x24Bedroom />;
    }
    case 'icon-parking': {
      return <Icon24x24Parking />;
    }
    case 'icon-bathroom': {
      return <Icon24x24Bathroom />;
    }
    case 'icon-key-vertical-rounded': {
      return <Icon24x24KeyVerticalRounded />;
    }
    default:
      return null;
  }
}
