import ResultsTabs from "./components/ResultsTabs";

export default function Container() {
  return (
    <section className="container mx-auto rounded-lg bg-[seashell] h-[550px] -mt-10 shadow-2xl p-0 overflow-hidden">
      <ResultsTabs />
      <div></div>
    </section>
  );
}
