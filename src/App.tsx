import { useState } from "react";
import Container from "./Container";
// import Footer from "./Footer";
import Header from "./Header";
import { useActiveId, useJobContent, useJobItems } from "./hooks/hooks";
import Footer from "./Footer";
import { useDebounce } from "use-debounce";
import { Toaster } from "react-hot-toast";

function App() {
  const [searchText, setSearchText] = useState("");
  const [debounceText] = useDebounce(searchText, 250);
  const [JobItem, loading, JobTotal] = useJobItems(debounceText);
  const id = useActiveId();
  const [jobItems, isLoading] = useJobContent(id);

  return (
    <>
      <Header searchText={searchText} setSearchText={setSearchText} />
      <Container
        isLoading={isLoading}
        loading={loading}
        jobList={JobItem}
        jobItems={jobItems}
        JobTotal={JobTotal}
      />
      <Footer />
      <Toaster position="top-right" />
    </>
  );
}

export default App;
