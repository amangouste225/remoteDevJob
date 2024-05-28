import JobDescription from "./components/JobDescription";
import ResultsTabs from "./components/ResultsTabs";

export default function Container({ loading, jobList }) {
  return (
    <section className="container mx-auto flex flex-row rounded-lg bg-[seashell] h-[630px] -mt-5 shadow-2xl p-0 relative">
      <ResultsTabs loading={loading} jobList={jobList} />
      <JobDescription />
    </section>
  );
}
