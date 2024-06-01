import { NavLink } from 'react-router-dom';
import Illustration404 from '../../@illustrations/Illustration404';
import BaseSection from '../../BaseSection';

export default function Details404Section() {
  return (
    <BaseSection>
      <div className="flex h-screen flex-col items-center justify-center gap-3 border">
        <Illustration404 />
        <p className="font-groteskspace text-[24px] font-bold text-light-950 md:text-[28px] lg:text-[32px]">
          Oops! The address is incorrect.
        </p>
        <NavLink
          to="/"
          className="flex h-[48px] w-full items-center justify-center rounded-md bg-electric-violet-600 text-[20px] text-light-50 md:h-[60px] md:text-[22px]"
        >
          <span>Return to home</span>
        </NavLink>
      </div>
    </BaseSection>
  );
}
