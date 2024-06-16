type Props = {
  children: React.ReactNode;
};

export default function Container({ children }: Props) {
  return (
    <section className="container mx-auto flex flex-row rounded-lg bg-[seashell] min-h-[630px] -mt-5 shadow-2xl p-0 relative overflow-hidden">
      {children}
    </section>
  );
}
