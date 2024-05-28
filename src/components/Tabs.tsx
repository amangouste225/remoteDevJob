import { FaSortAmountDownAlt } from "react-icons/fa";
import Button from "./Button";
import { JobItem } from "../lib/types";

type JobListProps = {
  jobList: JobItem[];
};
export default function Tabs({ jobList }: JobListProps) {
  return (
    <div className="flex justify-between items-center border-b-2 border-b-slate-200 sticky top-0 p-3 bg-white">
      <h5>
        <span className="font-bold px-1">{jobList.length} </span>
        Results
      </h5>
      <div className="flex items-center gap-2">
        <span>
          <FaSortAmountDownAlt />
        </span>
        <Button type="relevant">relevant</Button>
        <Button type="recent">recent</Button>
      </div>
    </div>
  );
}
