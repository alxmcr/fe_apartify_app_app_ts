import { LocalPhotoData } from '../../@types/service/serviceTypes';
import PhotoGalleryApartment from './PhotoGalleryApartment';

type Props = {
  photos: LocalPhotoData[];
};

export default function BoxPhotoGalleryApartment({ photos = [] }: Props) {
  if (photos.length < 3) {
    return null;
  }

  return (
    <div>
      <div className="block sm:hidden">
        <PhotoGalleryApartment photos={photos.slice(0, 1)} />
      </div>
      <div className="hidden sm:block md:hidden">
        <PhotoGalleryApartment photos={photos.slice(0, 2)} />
      </div>
      <div className="hidden md:block">
        <PhotoGalleryApartment photos={photos} />
      </div>
    </div>
  );
}
