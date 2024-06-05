import { FaBookmark } from "react-icons/fa6";

type Props = {
  type?: string;
};

export default function BookMark({ type }: Props) {
  return (
    <FaBookmark
      className={`${
        type === "blue" ? "text-blue-500" : "text-black"
      }  group-hover:text-blue-600`}
    />
  );
}
