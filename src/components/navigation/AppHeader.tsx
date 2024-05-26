import { NavLinkData } from '../../@types/appTypes';
import LogoMuvifav from '../@logos/48x48/LogoMuvifav';
import AppNavigation from './AppNavigation';

type Props = {
  navLinks: NavLinkData[];
};

export default function AppHeader({ navLinks = [] }: Props) {
  return (
    <header className="absolute flex w-full justify-center py-4">
      <div className="mx-auto flex w-full items-center justify-between px-4 md:px-10 lg:w-[1028px] lg:px-0">
        <LogoMuvifav />
        <AppNavigation navLinks={navLinks} />
      </div>
    </header>
  );
}
