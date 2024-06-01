import { useParams } from 'react-router-dom';
import { LoadingStates } from '../@types/service/enumsService';
import MainContentApartment from '../components/apartment-page/MainContentApartment';
import ApartmentFloorPlanSection from '../components/apartment-page/sections/AparmentFloorPlanSection';
import ApartmentDescriptionSection from '../components/apartment-page/sections/ApartmentDescriptionSection';
import ApartmentFeaturesDetailsSection from '../components/apartment-page/sections/ApartmentFeaturesDetailsSection';
import ApartmentInvestmentsSection from '../components/apartment-page/sections/ApartmentInvestmentsSection';
import ApartmentOutdoorsDetailsSection from '../components/apartment-page/sections/ApartmentOutdoorsSection';
import { useLocalApartment } from '../hooks/apartments/local/useLocalApartment';
import CardApartmentDetails from '../components/@apartment/CardApartmentDetails';

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
        <ApartmentOutdoorsDetailsSection apartment={apartment} />
        <ApartmentInvestmentsSection apartment={apartment} />
        <ApartmentFloorPlanSection apartment={apartment} />
        <CardApartmentDetails apartment={apartment} />
      </main>
    );
  }

  return null;
}
