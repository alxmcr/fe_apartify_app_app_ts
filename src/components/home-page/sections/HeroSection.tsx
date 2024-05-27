import BaseSection from '../../BaseSection';
import CardHeroInfo from '../cards/CardHeroInfo';

export default function HeroSection() {
  return (
    <BaseSection id="hero" isWidthFull>
      <div className="flex h-screen flex-col items-center">
        <div className="flex h-screen flex-col items-start justify-center bg-right px-4 md:w-full md:bg-[url('/assets/illustrations/tablet/building-002.svg')] md:bg-no-repeat md:px-10 lg:mx-auto lg:w-[1028px] lg:bg-none lg:bg-no-repeat lg:px-0">
          <CardHeroInfo />
        </div>
      </div>
    </BaseSection>
  );
}
