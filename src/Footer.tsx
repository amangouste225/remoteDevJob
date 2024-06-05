import { JobItemsExpanded } from "./lib/types";

type Props = {
  jobItem: JobItemsExpanded[];
};

export default function Footer({ jobItem }: Props) {
  return (
    <footer className="container mx-auto flex justify-between items-center text-black font-light tracking-tight absolute -translate-x-1/2 -translate-y-1/2 left-1/2 bottom-5 font-pt-sans">
      <div>
        @Copyright by{" "}
        <a href="#" target="_blank" className="underline">
          Amangoua
        </a>
      </div>
      <div>
        <h6>
          <strong className="font-bold">{jobItem.length}</strong> total jobs
          available
        </h6>
      </div>
    </footer>
  );
}
