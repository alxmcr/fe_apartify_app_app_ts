import { NavLinkData } from '../../@types/app/appTypes';
import NavigationList from './lists/NavigationList';

type Props = {
  navLinks: NavLinkData[];
};

export default function AppNavigation({ navLinks = [] }: Props) {
  return (
    <nav>
      <NavigationList navLinks={navLinks} />
    </nav>
  );
}
