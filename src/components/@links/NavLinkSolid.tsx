import { NavLink } from 'react-router-dom';
import { NavLinkData } from '../../@types/app/appTypes';

type Props = {
  navLink: NavLinkData;
};

export default function NavLinkSolid({ navLink }: Props) {
  return (
    <NavLink
      to={navLink.href}
      className="flex h-[66px] w-full items-center justify-center rounded-lg bg-electric-violet-700 font-groteskspace text-[20px] text-light-50 hover:bg-electric-violet-500 hover:text-light-50 md:w-[324px] md:text-[24px]"
    >
      {navLink.text}
    </NavLink>
  );
}
