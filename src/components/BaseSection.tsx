type Props = {
  id?: string;
  children: React.ReactNode;
  isWidthFull?: boolean;
};

export default function BaseSection({ children, id = '', isWidthFull = false }: Props) {
  if (isWidthFull) {
    return (
      <section id={id} className="flex justify-center">
        <div className="w-full">{children}</div>
      </section>
    );
  }

  return (
    <section id={id} className="flex justify-center px-[16px] md:px-[40px] lg:px-0">
      <div className="w-full lg:w-[1028px]">{children}</div>
    </section>
  );
}
