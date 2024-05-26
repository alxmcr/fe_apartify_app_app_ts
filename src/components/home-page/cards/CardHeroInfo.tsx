import { searchApartmentLink } from '../../../mocks/mock-nav-links';
import NavLinkSolid from '../../@links/NavLinkSolid';

export default function CardHeroInfo() {
  return (
    <article className=" flex flex-col gap-12 font-groteskspace md:w-[478px]">
      <div className="flex flex-col justify-center gap-7">
        <h1 className="font-rowdies text-[40px] font-bold text-golden-300 md:text-[48px]">Muvifav</h1>
        <p className="text-[24px] text-light-50 md:text-[28px]">
          Find information about your favorite movies in our amazing, unique catalogue
        </p>
      </div>
      <NavLinkSolid navLink={searchApartmentLink} />
    </article>
  );
}
