import MainContentHomePage from '../components/home-page/MainContentHomePage';
import LatestApartmentsSection from '../components/home-page/sections/LatestApartmentsSection';
import PopularApartmentsSection from '../components/home-page/sections/PopularApartmentsSection';

export default function HomePage() {
  return (
    <main>
      <MainContentHomePage />
      <PopularApartmentsSection />
      <LatestApartmentsSection />
    </main>
  );
}
