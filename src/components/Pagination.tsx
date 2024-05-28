import { IoMdArrowRoundForward } from "react-icons/io";

export default function Pagination() {
  return (
    <div className="relative h-12">
      <button className="rounded-full bg-gray py-1 text-[12px] px-2 m-3 absolute right-2">
        Page 1
        <span className="inline-block ml-1 pt-1">
          <IoMdArrowRoundForward />
        </span>
      </button>
    </div>
  );
}
