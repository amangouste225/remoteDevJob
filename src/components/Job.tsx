import { FaBookmark } from "react-icons/fa6";
import { JobItem } from "../lib/types";

type JobListProps = {
  list: JobItem;
};

export default function Job({ list }: JobListProps) {
  return (
    <li className="flex cursor-pointer items-center justify-between gap-3 p-4 border-b-2 border-b-slate-200 hover:bg-slate-100 duration-200 group ease-in-out">
      <a href={`#${list.id}`} className="flex flex-row  justify-between w-full">
        <div className="flex gap-4">
          <div className="w-10 h-10 bg-gray flex-center font-semibold uppercase rounded-lg text-sm">
            {list.badgeLetters}
          </div>
          <div className="text-sm">
            <h3 className="font-bold ">{list.title}</h3>
            <p className="italic">{list.company} </p>
          </div>
        </div>
        <p>
          <FaBookmark className=" group-hover:text-blue-600" />
          <span className="text-sm">{list.daysAgo}d</span>
        </p>
      </a>
    </li>
  );
}
