import JobDescription from "./components/JobDescription";
import ResultsTabs from "./components/ResultsTabs";
import { JobItem, JobItemsExpanded } from "./lib/types";

type Props = {
  loading: boolean;
  jobList: JobItem[];
  jobItems: JobItemsExpanded | null;
  isLoading: boolean;
  JobTotal: number;
};

export default function Container({
  isLoading,
  loading,
  jobList,
  jobItems,
  JobTotal,
}: Props) {
  return (
    <section className="container mx-auto flex flex-row rounded-lg bg-[seashell] min-h-[630px] -mt-5 shadow-2xl p-0 relative overflow-hidden">
      <ResultsTabs JobTotal={JobTotal} loading={loading} jobList={jobList} />
      <JobDescription isLoading={isLoading} jobItem={jobItems} />
    </section>
  );
}
