import JobList from "./JobList";
import Spinner from "./Spinner";
import Tabs from "./Tabs";
import { JobItem } from "../lib/types";

type Props = {
  loading: boolean;
  jobList: JobItem[];
};

export default function ResultsTabs({ loading, jobList }: Props) {
  return (
    <div className="w-[45%] bg-white p-0 overflow-y-scroll relative">
      <Tabs jobList={jobList} />

      {loading ? (
        <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          <Spinner />
        </div>
      ) : (
        <>
          <JobList jobList={jobList} />
        </>
      )}
    </div>
  );
}
