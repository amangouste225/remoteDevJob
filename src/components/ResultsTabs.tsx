import JobList from "./JobList";
import Tabs from "./Tabs";

export default function ResultsTabs() {
  return (
    <div className="w-[45%] bg-white p-0 overflow-y-scroll relative">
      <Tabs />
      <JobList />
    </div>
  );
}
