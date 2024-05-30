import { LocalPhotoData } from '../../@types/service/serviceTypes';

type Props = {
  photos: LocalPhotoData[];
};

export default function PhotoGalleryApartment({ photos = [] }: Props) {
  return (
    <div className="lg:grid lg:grid-cols-3 lg:gap-2">
      {photos.map((photo) => (
        <img key={photo.ph_photo} src={photo.ph_url} alt={photo.ph_alt} />
      ))}
    </div>
  );
}
