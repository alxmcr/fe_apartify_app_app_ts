import { LocalApartmentData } from '../../@types/service/serviceTypes';
import AppHeader from '../navigation/AppHeader';
import ApartmentHeroSection from './sections/ApartmentHeroSection';

type Props = {
  apartment: LocalApartmentData;
};

export default function MainContentApartment({ apartment }: Props) {
  return (
    <main>
      <AppHeader />
      <ApartmentHeroSection apartment={apartment} />
    </main>
  );
}
