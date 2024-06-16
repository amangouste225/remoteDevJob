import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";

import PaginationButton from "./PaginationButton";

type Props = {
  onClick: (direction: "next" | "previous") => void;
  previousPage: number;
  nextPage: number;
  currentPage: number;
};

export default function Pagination({
  onClick,
  currentPage,
  previousPage,
  nextPage,
}: Props) {
  return (
    <div className="relative h-12">
      {currentPage > 1 && (
        <PaginationButton
          className="left-2"
          icon=<FaArrowLeft />
          type={previousPage}
          onClick={() => onClick("previous")}
        />
      )}

      <PaginationButton
        className="right-2"
        icon=<FaArrowRight />
        type={nextPage}
        onClick={() => onClick("next")}
      />
    </div>
  );
}
