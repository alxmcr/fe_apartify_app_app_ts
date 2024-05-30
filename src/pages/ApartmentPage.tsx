import { useParams } from 'react-router-dom';
import { LoadingStates } from '../@types/service/enumsService';
import MainContentApartment from '../components/apartment-page/MainContentApartment';
import ApartmentDescriptionSection from '../components/apartment-page/sections/ApartmentDescriptionSection';
import ApartmentFeaturesDetailsSection from '../components/apartment-page/sections/ApartmentFeaturesDetailsSection';
import { useLocalApartment } from '../hooks/apartments/local/useLocalApartment';

export default function ApartmentPage() {
  const { id } = useParams();
  const { apartment, errorApartment, statusApartment } = useLocalApartment(id);

  if (LoadingStates.PENDING === statusApartment) {
    return <h2>Loading apartment data...</h2>;
  }

  if (LoadingStates.ERROR === statusApartment && errorApartment) {
    return <h2>{errorApartment.message}</h2>;
  }

  if (LoadingStates.SUCCESS === statusApartment && apartment !== null) {
    return (
      <main className="flex flex-col gap-8">
        <MainContentApartment apartment={apartment} />
        <ApartmentDescriptionSection apartment={apartment} />
        <ApartmentFeaturesDetailsSection apartment={apartment} />
      </main>
    );
  }

  return null;
}
