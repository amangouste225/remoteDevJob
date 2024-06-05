import { JobItemsExpanded } from "../lib/types";
import BookMark from "./BookMark";
import NoResearch from "./NoResearch";

type JobItemContentProps = {
  jobItem: JobItemsExpanded | null;
};

import { GrMoney } from "react-icons/gr";
import { MdOutlineAccessTime } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

export default function JobDescription({ jobItem }: JobItemContentProps) {
  if (!jobItem) {
    return <NoResearch />;
  }

  return (
    <section className="w-full h-full ">
      <div className="w-full h-[250px] relative">
        <img
          src={`${jobItem.coverImgURL}`}
          alt="background job"
          className="w-full h-full object-cover object-center "
        />
        <div className="absolute h-full w-full bg-black top-0 left-0 backdrop-sepia-0 bg-black/70"></div>
        <div className="px-10 absolute -bottom-4 flex items-start gap-6">
          <span className="w-16 h-20 text-2xl font-bold bg-yellow-300 flex justify-center items-center rounded-lg">
            {jobItem.badgeLetters}
          </span>
          <div className="text-white">
            <h3 className="text-2xl font-bold leading-none">{jobItem.title}</h3>
            <p className="italic text-xl font-light">{jobItem.company}</p>
          </div>
        </div>

        <div className="px-10 my-10">
          <div className="flex items-start gap-10">
            <h5>{jobItem.daysAgo}d</h5>
            <span>
              <BookMark type="blue" />
            </span>
            <div>
              <p>{jobItem.description}</p>
              <ul className="flex w-full justify-start gap-10 m-5">
                <li className="flex items-center gap-2">
                  <MdOutlineAccessTime />
                  {jobItem.duration}
                </li>
                <li className="flex items-center gap-2">
                  <GrMoney />
                  {jobItem.salary}
                </li>
                <li className="flex items-center gap-2">
                  <IoLocationOutline />
                  {jobItem.location}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <button className="absolute bg-blue-600 right-2 top-5 px-6 py-2 text-sm rounded-md text-white shadow-xl">
          APPLY
        </button>
      </div>
    </section>
  );
}
