import { searchApartmentLink } from '../../../mocks/mock-nav-links';
import NavLinkSolid from '../../@links/NavLinkSolid';

export default function CardHeroInfo() {
  return (
    <article className="flex flex-col gap-12 font-groteskspace md:w-[478px]">
      <div className="flex flex-col justify-center gap-7">
        <h1 className="font-rowdies text-[40px] font-bold md:text-[48px]">
          Find your dream <span className="border border-x-0 border-t-0 border-b-electric-violet-600 font-bold text-electric-violet-600">apartment</span>
        </h1>
        <p className="font-groteskspace text-[24px] text-light-950 md:text-[28px]">
        Enjoy searching the apartment that always wanted, on an easy way, comfortable, and fast.
        </p>
      </div>
      <NavLinkSolid navLink={searchApartmentLink} />
    </article>
  );
}
