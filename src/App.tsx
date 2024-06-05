import { useState } from "react";
import Container from "./Container";
// import Footer from "./Footer";
import Header from "./Header";
import { useActiveId, useJobContent, useJobItems } from "./hooks/hooks";
// import Footer from "./Footer";

function App() {
  const [searchText, setSearchText] = useState("");
  const [JobItem, loading] = useJobItems(searchText);

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
      />
    </>
  );
}

export default App;
