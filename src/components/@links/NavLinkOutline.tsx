import { NavLink } from 'react-router-dom';
import { NavLinkData } from '../../@types/app/appTypes';

type Props = {
  navLink: NavLinkData;
};

export default function NavLinkOutline({ navLink }: Props) {
  return (
    <NavLink
      to={navLink.href}
      className="flex h-12 w-[130px] items-center justify-center rounded-lg border border-golden-300 font-groteskspace text-golden-300 hover:bg-golden-300 hover:text-light-950"
    >
      {navLink.text}
    </NavLink>
  );
}
