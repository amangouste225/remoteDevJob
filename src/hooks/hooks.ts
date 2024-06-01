import { useEffect, useState } from "react";
import { JobItem } from "../lib/types";

export function useJobItems(searchText: string) {
  const [jobList, setJobList] = useState<JobItem[]>([]);
  const [loading, setLoading] = useState(false);
  const jobSlice = jobList.slice(0, 7);
  useEffect(() => {
    const fetchData = async () => {
      if (!searchText) return;
      setLoading(true);
      try {
        const response = await fetch(
          `https://bytegrad.com/course-assets/projects/rmtdev/api/data?search='${searchText}'`
        );
        const data = await response.json();
        setLoading(false);
        setJobList(data.jobItems);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [searchText]);

  return [jobSlice, loading] as const;
}
