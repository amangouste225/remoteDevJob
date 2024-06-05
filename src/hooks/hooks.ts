import { useEffect, useState } from "react";
import { JobItem } from "../lib/types";
import { BASE_API_URL } from "../constant";
import { useQuery } from "react-query";

export function useActiveId() {
  const [activeId, setActiveId] = useState<number | null>(null);

  useEffect(() => {
    function Func() {
      const id = +window.location.hash.slice(1);
      setActiveId(id);
    }
    Func();
    window.addEventListener("hashchange", Func);
    return () => window.removeEventListener("hashchange", Func);
  }, []);

  return activeId;
}

export function useJobItems(searchText: string) {
  const [jobList, setJobList] = useState<JobItem[]>([]);
  const [loading, setLoading] = useState(false);
  const jobSlice = jobList.slice(0, 7);
  const JobTotal = jobList.length;

  useEffect(() => {
    const fetchData = async () => {
      if (!searchText) return;
      setLoading(true);
      try {
        const response = await fetch(`${BASE_API_URL}?search='${searchText}'`);
        const data = await response.json();
        setLoading(false);
        setJobList(data.jobItems);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [searchText]);

  return [jobSlice, loading, JobTotal] as const;
}

// export function useJobContent(id: number | null) {
//   const [jobItems, setJobItems] = useState<JobItemsExpanded | null>(null);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     if (!id) return;
//     console.log(id);
//     const fetchItems = async () => {
//       setIsLoading(true);
//       const res = await fetch(`${BASE_API_URL}/${id}`);
//       const data = await res.json();
//       setIsLoading(false);
//       setJobItems(data.jobItem);
//     };

//     fetchItems();
//   }, [id]);

//   return [jobItems, isLoading] as const;
// }

export function useJobContent(id: number | null) {
  const { data, isLoading } = useQuery(
    ["job-item", id],

    async () => {
      const res = await fetch(`${BASE_API_URL}/${id}`);
      const data = await res.json();
      console.log(data);
      return data;
    },
    {
      staleTime: 1000 * 60 * 60,
      enabled: Boolean(id),
      onError: () => {},
      retry: false,
      refetchOnWindowFocus: false,
    }
  );

  console.log(data);
  const jobItem = data?.jobItem;
  return [jobItem, isLoading] as const;
}
