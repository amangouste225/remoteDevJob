import { JobItemsExpanded } from "../lib/types";
import BookMark from "./BookMark";
import NoResearch from "./NoResearch";

type JobItemContentProps = {
  jobItem: JobItemsExpanded | null;
  isLoading: boolean;
};

import { GrMoney } from "react-icons/gr";
import { MdOutlineAccessTime } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import Separator from "./Separator";
import Spinner from "./Spinner";

export default function JobDescription({
  isLoading,
  jobItem,
}: JobItemContentProps) {
  if (isLoading)
    return (
      <section className="w-full min-h-full flex-center">
        <Spinner />
      </section>
    );

  if (!jobItem) {
    return (
      <section className="w-full min-h-full">
        <NoResearch />
      </section>
    );
  }

  return (
    <section className="w-full h-full">
      <div className="w-full h-[200px] relative">
        <img
          src={`${jobItem.coverImgURL}`}
          alt="background job"
          className="w-full h-full object-cover object-center "
        />
        <div className="absolute h-full w-full bg-black top-0 left-0 backdrop-sepia-0 bg-black/70"></div>
        <div className="px-10 absolute -bottom-2 flex items-start gap-6">
          <span className="w-16 h-16 text-2xl font-bold bg-yellow-300 flex justify-center items-center rounded-lg">
            {jobItem.badgeLetters}
          </span>
          <div className="text-white">
            <h3 className="text-2xl font-bold leading-none">{jobItem.title}</h3>
            <p className="italic text-lg font-light">{jobItem.company}</p>
          </div>
        </div>

        <div className="px-10 my-10">
          <div className="flex items-start gap-10">
            <h5>{jobItem.daysAgo}d</h5>
            <span>
              <BookMark type="blue" />
            </span>
            <div>
              <p className="text-sm">{jobItem.description}</p>
              <ul className="flex w-full flex-wrap justify-start lg:gap-10 gap-2 m-5">
                <li className="flex items-center gap-2 ">
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
          <div className="grid grid-cols-3 gap-5">
            <div className="col-span-1 flex gap-10 flex-col">
              <div>
                <h3 className="font-bold text-lg">Qualifications</h3>
                <p className="text-sm">Other qualifications may apply</p>
              </div>
              <div>
                <h3 className="font-bold text-lg">Company Reviews</h3>
                <p className="text-sm">Recent thing people are saying</p>
              </div>
            </div>
            <div className="col-span-2 flex gap-10 flex-col">
              <ul className="flex gap-1 flex-wrap">
                {jobItem.qualifications.map((item) => (
                  <li
                    className="bg-slate-200 px-2 text-md py-1 rounded-md"
                    key={item}
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <ul className="grid  gap-5 grid-cols-2">
                {jobItem.reviews.map((item) => (
                  <li className="text-sm rounded-md italic" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Separator />
        </div>
        <button className="absolute bg-blue-600 right-2 top-5 px-5 py-2 text-sm text-white shadow-xl">
          APPLY
        </button>
      </div>
    </section>
  );
}
