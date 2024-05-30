import { LocalPhotoData } from '../../@types/service/serviceTypes';

type Props = {
  photos: LocalPhotoData[];
};

export default function PhotoGalleryApartment({ photos = [] }: Props) {
  return (
    <div className="flex flex-wrap justify-center">
      {photos.map((photo) => (
        <img
          key={photo.ph_photo}
          src={photo.ph_url}
          alt={photo.ph_alt}
          className="w-full rounded-2xl p-2 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3"
        />
      ))}
    </div>
  );
}
