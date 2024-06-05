import { useActiveId } from "../hooks/hooks";
import { JobItem } from "../lib/types";
import Job from "./Job";
import { Fragment } from "react/jsx-runtime";

type JobListItem = {
  jobList: JobItem[];
};

export default function JobList({ jobList }: JobListItem) {
  const id = useActiveId();
  return (
    <ul className="w-full">
      {jobList.map((list) => (
        <Fragment key={list.id}>
          <Job isActive={list.id === id} list={list} />
        </Fragment>
      ))}
    </ul>
  );
}
