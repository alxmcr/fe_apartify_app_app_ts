import { MOCK_NAV_LINKS } from '../../mocks/mock-nav-links';
import AppHeader from '../navigation/AppHeader';
import HeroSection from './sections/HeroSection';

export default function MainContent() {
  return (
    <main>
      <AppHeader navLinks={MOCK_NAV_LINKS} />
      <HeroSection />
    </main>
  );
}
