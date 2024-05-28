import JobDescription from "./components/JobDescription";
import ResultsTabs from "./components/ResultsTabs";

export default function Container() {
  return (
    <section className="container mx-auto flex flex-row rounded-lg bg-[seashell] h-[500px] -mt-5 shadow-2xl p-0 relative">
      <ResultsTabs />
      <JobDescription />
    </section>
  );
}
