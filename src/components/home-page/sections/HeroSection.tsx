import BaseSection from '../../BaseSection';
import CardHeroInfo from '../cards/CardHeroInfo';

export default function HeroSection() {
  return (
    <BaseSection id="hero" isWidthFull>
      <div className="flex h-screen flex-col items-center md:h-[550px]">
        <div className="flex h-screen flex-col items-start justify-center px-4 md:h-[550px] md:w-full md:px-10 lg:mx-auto lg:w-[1028px] lg:px-0">
          <CardHeroInfo />
        </div>
      </div>
    </BaseSection>
  );
}
