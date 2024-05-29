import MainContent from '../components/home-page/MainContent';
import LatestApartmentsSection from '../components/home-page/sections/LatestApartmentsSection';
import PopularApartmentsSection from '../components/home-page/sections/PopularApartmentsSection';

export default function HomePage() {
  return (
    <main>
      <MainContent />
      <PopularApartmentsSection />
      <LatestApartmentsSection />
    </main>
  );
}
