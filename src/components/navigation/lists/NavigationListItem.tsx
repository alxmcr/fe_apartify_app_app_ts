import { NavLinkData } from '../../../@types/appTypes';
import NavLinkOutline from '../../@links/NavLinkOutline';

type Props = {
  navLink: NavLinkData;
};

export default function NavigationListItem({ navLink }: Props) {
  return (
    <li>
      <NavLinkOutline navLink={navLink} />
    </li>
  );
}
