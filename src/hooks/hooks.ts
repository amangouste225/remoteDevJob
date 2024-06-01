import { useEffect, useState } from "react";

export function useJobItems(searchText: string) {
  const [jobList, setJobList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!searchText) return;
      setLoading(true);
      try {
        const response = await fetch(
          `https://bytegrad.com/course-assets/projects/rmtdev/api/data?search='${searchText}'`
        );
        const data = await response.json();
        console.log(data.jobItems, searchText);
        setLoading(false);
        setJobList(data.jobItems);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [searchText]);

  return { jobList, loading };
}
