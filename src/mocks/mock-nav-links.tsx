import { NavLinkData } from '../@types/appTypes';

export const homeLink: NavLinkData = {
  id: 'nav-link-001',
  text: 'Apartify',
  href: '/',
};

export const searchApartmentLink: NavLinkData = {
  id: 'nav-link-002',
  text: 'Search your apartment',
  href: '/listings',
};

export const MOCK_NAV_LINKS: NavLinkData[] = [homeLink];
