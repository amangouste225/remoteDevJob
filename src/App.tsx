import { Fragment, useState } from "react";
import Container from "./Container";
// import Footer from "./Footer";
import Header from "./Header";
import { useActiveId, useJobContent, useJobItems } from "./hooks/hooks";
import Footer from "./Footer";
import { useDebounce } from "use-debounce";
import { Toaster } from "react-hot-toast";
import ResultsTabs from "./components/ResultsTabs";
import JobDescription from "./components/JobDescription";
import Tabs from "./components/Tabs";
import Spinner from "./components/Spinner";
import JobList from "./components/JobList";
import Pagination from "./components/Pagination";
import Job from "./components/Job";

function App() {
  const [searchText, setSearchText] = useState("");
  const [debounceText] = useDebounce(searchText, 250);
  const [jobs, loading, JobTotal] = useJobItems(debounceText);
  const id = useActiveId();

  const [jobItems, isLoading] = useJobContent(id);
  const [currentPage, setCurrentPage] = useState(1);
  const jobSlice = jobs?.slice(currentPage * 7 - 7, currentPage * 7) || [];
  const totalNumberOfPages = JobTotal / 7;
  console.log(totalNumberOfPages, currentPage);

  const handleChange = (direction: "next" | "previous") => {
    switch (direction) {
      case "next":
        setCurrentPage((prev) => prev + 1);
        break;
      case "previous":
        setCurrentPage((prev) => prev - 1);
        break;
    }
  };

  return (
    <>
      <Header searchText={searchText} setSearchText={setSearchText} />
      <Container>
        <ResultsTabs>
          <Tabs JobTotal={JobTotal} />

          {loading ? (
            <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
              <Spinner />
            </div>
          ) : (
            <>
              <JobList>
                <ul className="w-full">
                  {jobSlice.map((list) => (
                    <Fragment key={list.id}>
                      <Job isActive={list.id === id} list={list} />
                    </Fragment>
                  ))}
                </ul>
                {JobTotal !== 0 ? (
                  <Pagination
                    previousPage={currentPage - 1}
                    nextPage={currentPage + 1}
                    onClick={handleChange}
                    currentPage={currentPage}
                    totalNumberOfPages={totalNumberOfPages}
                  />
                ) : (
                  ""
                )}
              </JobList>
            </>
          )}
        </ResultsTabs>
        <JobDescription isLoading={isLoading} jobItem={jobItems} />
      </Container>
      <Footer />
      <Toaster position="top-right" />
    </>
  );
}

export default App;
