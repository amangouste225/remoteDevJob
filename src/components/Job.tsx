import { FaSquareFull } from "react-icons/fa6";

export default function Job() {
  return (
    <div className="flex items-center justify-between gap-3 p-4 border-b-2 border-b-slate-200">
      <div className="flex gap-4">
        <div className="w-10 h-10 bg-gray flex-center font-semibold uppercase rounded-lg text-sm">
          9t
        </div>
        <div className="text-sm">
          <h3 className="font-bold ">Front End React Engineer</h3>
          <p className="italic">9th Tech</p>
        </div>
      </div>
      <p className="">
        <FaSquareFull color="#d8d2d2" />
        <span className="text-sm">9d</span>
      </p>
    </div>
  );
}
