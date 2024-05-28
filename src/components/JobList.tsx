import { JobItem } from "../lib/types";
import Job from "./Job";
import { Fragment } from "react/jsx-runtime";

type JobListItem = {
  jobList: JobItem[];
};

export default function JobList({ jobList }: JobListItem) {
  return (
    <div className="w-full">
      {jobList.map((list) => (
        <Fragment key={list.id}>
          <Job list={list} />
        </Fragment>
      ))}
    </div>
  );
}
