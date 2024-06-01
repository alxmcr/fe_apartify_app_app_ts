import { LocalApartmentData } from '../../@types/service/serviceTypes';

type Props = {
  apartment: LocalApartmentData;
};

export default function CardApartmentDetails({ apartment }: Props) {
  if (apartment === null || apartment === undefined) {
    return null;
  }

  return (
    <article className="flex h-[250px] w-full flex-col gap-[30px] rounded-lg border p-[8px] md:h-[290px] md:p-[16px]">
      <header className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h3 className="text-[14px] text-light-400 md:text-[18px]">DISCOUNTED PRICE</h3>
          <span className="font-groteskspace text-[16px] font-bold text-electric-violet-600 md:text-[22px]">
            $ 2,898.89
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-[14px] text-light-400 md:text-[18px]">LIST PRICE</h3>
          <span className="font-groteskspace text-[16px] font-bold text-electric-violet-600 md:text-[22px]">
            $ 4,898.89
          </span>
        </div>
      </header>
      <div className="flex flex-col gap-2">
        <span className="text-center text-[20px] font-bold md:text-[26px]">Do you want to visit it?</span>
        <a
          href="#"
          className="flex h-[48px]  items-center justify-center rounded-md bg-electric-violet-600 text-[20px] font-bold text-light-50 md:h-[60px] md:text-[22px]"
        >
          Schedule a visit
        </a>
      </div>
      <footer className="flex justify-center text-light-500">
        <span className="w-full text-center text-[14px] md:text-[16px]">
          It's free and without obligations.
        </span>
      </footer>
    </article>
  );
}
