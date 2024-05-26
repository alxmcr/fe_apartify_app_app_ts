import { NavLinkData } from '../../@types/appTypes';
import Logo56x56Apartify from '../@logos/56x56/Logo56x56Apartify';
import AppNavigation from './AppNavigation';

type Props = {
  navLinks: NavLinkData[];
};

export default function AppHeader({ navLinks = [] }: Props) {
  return (
    <header className="absolute flex w-full justify-center py-4">
      <div className="mx-auto flex w-full items-center justify-between px-4 md:px-10 lg:w-[1028px] lg:px-0">
        <Logo56x56Apartify />
        <AppNavigation navLinks={navLinks} />
      </div>
    </header>
  );
}
