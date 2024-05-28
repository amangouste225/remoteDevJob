import { FaCaretDown } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <header className="h-44 w-full bg-header flex-col gap-6 bg-contain bg-repeat flex justify-center items-center">
      <div className="flex items-center gap-4 text-white font-light text-xl leading-none	">
        <a href="/">
          rmt<span className="italic font-bold">Dev</span>Jobs
        </a>
        <a href="/" className="flex items-center border-l-2 pl-4">
          <h3>bookmarks </h3>
          <FaCaretDown />
        </a>
      </div>
      <form className="relative w-[500px] h-12 rounded-sm bg-white shadow-2xl">
        <button type="submit" className="h-full px-4">
          <FaSearch />
        </button>
        <input
          type="text"
          className="absolute left-12 h-full w-[430px] text-black focus:outline-none placeholder:text-black"
          placeholder="Find remote developer jobs...."
        />
      </form>
    </header>
  );
}
