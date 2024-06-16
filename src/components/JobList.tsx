import { Fragment } from "react";

type JobListItem = {
  children: React.ReactNode;
};

export default function JobList({ children }: JobListItem) {
  return <Fragment>{children}</Fragment>;
}
