import { useParams } from 'react-router-dom';
import { LoadingStates } from '../@types/service/enumsService';
import CardApartmentDetails from '../components/@apartment/CardApartmentDetails';
import MainContentApartment from '../components/apartment-page/MainContentApartment';
import ApartmentFloorPlanSection from '../components/apartment-page/sections/AparmentFloorPlanSection';
import ApartmentDescriptionSection from '../components/apartment-page/sections/ApartmentDescriptionSection';
import ApartmentFeaturesDetailsSection from '../components/apartment-page/sections/ApartmentFeaturesDetailsSection';
import ApartmentInvestmentsSection from '../components/apartment-page/sections/ApartmentInvestmentsSection';
import ApartmentOutdoorsDetailsSection from '../components/apartment-page/sections/ApartmentOutdoorsSection';
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

        <div id={id} className="flex justify-center md:px-[40px] lg:px-0">
          <div className="w-full lg:w-[1028px]">
            <div className="flex flex-wrap justify-center">
              <div className="w-full pr-6 lg:w-2/3">
                <div className="flex flex-col gap-8">
                  <ApartmentDescriptionSection apartment={apartment} />
                  <ApartmentFeaturesDetailsSection apartment={apartment} />
                  <ApartmentOutdoorsDetailsSection apartment={apartment} />
                  <ApartmentInvestmentsSection apartment={apartment} />
                  <ApartmentFloorPlanSection apartment={apartment} />
                </div>
              </div>
              <div className="w-full lg:w-1/3">
                <CardApartmentDetails apartment={apartment} />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return null;
}
