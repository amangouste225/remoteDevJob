import { useEffect, useState } from "react";
import { JobItem } from "../lib/types";
import { BASE_API_URL } from "../constant";
import { useQuery } from "react-query";
import toast from "react-hot-toast";

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
  // const [error, setError] = useState(false);
  const jobSlice = jobList.slice(0, 7);
  const JobTotal = jobList.length;

  useEffect(() => {
    const fetchData = async () => {
      if (!searchText) return;
      setLoading(true);

      const response = await fetch(`${BASE_API_URL}?search=${searchText}`);
      console.log(response);
      if (!response.ok) {
        const errorData = await response.json();
        toast.error(errorData.description);
        setLoading(false);
      }
      const data = await response.json();
      setLoading(false);
      setJobList(data.jobItems);
    };

    fetchData();
  }, [searchText]);

  return [jobSlice, loading, JobTotal] as const;
}

export function useJobContent(id: number | null) {
  const { data, isLoading } = useQuery(
    ["job-item", id],

    async () => {
      const res = await fetch(`${BASE_API_URL}/${id}`);

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message);
      }
      const data = await res.json();
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

  const jobItem = data?.jobItem;
  return [jobItem, isLoading] as const;
}
