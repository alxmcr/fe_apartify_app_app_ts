import { NavLinkData } from '../../../@types/appTypes';
import NavigationListItem from './NavigationListItem';

type Props = {
  navLinks: NavLinkData[];
};

export default function NavigationList({ navLinks = [] }: Props) {
  return (
    <ul>
      {navLinks.map((navLink) => (
        <NavigationListItem key={navLink.id} navLink={navLink} />
      ))}
    </ul>
  );
}
