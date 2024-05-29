import Icon28x28Bathroom from './Icon28x28Bathroom';
import Icon28x28Bedroom from './Icon28x28Bedroom';
import Icon28x28FloorPlan from './Icon28x28FloorPlan';
import Icon28x28KeyVerticalRounded from './Icon28x28KeyVerticalRounded';
import Icon28x28Parking from './Icon28x28Parking';

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

export default function App28x28Icon({ iconCode = 'icon-floor-plan' }: Props) {
  switch (iconCode) {
    case 'icon-floor-plan': {
      return <Icon28x28FloorPlan />;
    }
    case 'icon-bedroom': {
      return <Icon28x28Bedroom />;
    }
    case 'icon-parking': {
      return <Icon28x28Parking />;
    }
    case 'icon-bathroom': {
      return <Icon28x28Bathroom />;
    }
    case 'icon-key-vertical-rounded': {
      return <Icon28x28KeyVerticalRounded />;
    }
    default:
      return null;
  }
}
