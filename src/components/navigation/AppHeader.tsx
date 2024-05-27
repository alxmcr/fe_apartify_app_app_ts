import Logo56x56Apartify from '../@logos/56x56/Logo56x56Apartify';

export default function AppHeader() {
  return (
    <header className="absolute flex w-full justify-center py-4">
      <div className="mx-auto flex w-full items-center justify-between px-4 md:px-10 lg:w-[1028px] lg:px-0">
        <div className="flex items-center gap-2">
          <Logo56x56Apartify />
          <h2 className="font-inter text-[20px] font-bold">Apartify</h2>
        </div>
      </div>
    </header>
  );
}
