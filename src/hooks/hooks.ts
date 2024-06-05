import { useEffect, useState } from "react";
import { JobItem, JobItemsExpanded } from "../lib/types";
import { BASE_API_URL } from "../constant";

export function useJobItems(searchText: string) {
  const [jobList, setJobList] = useState<JobItem[]>([]);
  const [loading, setLoading] = useState(false);
  const jobSlice = jobList.slice(0, 7);
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

  return [jobSlice, loading] as const;
}

export function useActiveId() {
  const [activeId, setActiveId] = useState<number | null>(null);

  useEffect(() => {
    const Func = () => {
      const id = +window.location.hash.slice(1);
      setActiveId(id);
    };
    window.addEventListener("hashchange", Func);
    return () => window.removeEventListener("hashchange", Func);
  }, []);

  return activeId;
}

export function useJobContent(id: number | null) {
  const [jobItems, setJobItems] = useState<JobItemsExpanded | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      const res = await fetch(`${BASE_API_URL}/${id}`);
      const data = await res.json();
      setJobItems(data.jobItem);
      console.log(data.jobItem);
    };

    fetchItems();
  }, [id]);

  return jobItems;
}
