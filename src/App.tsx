import { useState } from "react";
import Container from "./Container";
// import Footer from "./Footer";
import Header from "./Header";
import { useActiveId, useJobContent, useJobItems } from "./hooks/hooks";

// import { BASE_API_URL } from "./constant";

// API KEY

function App() {
  const [searchText, setSearchText] = useState("");
  const [JobItem, loading] = useJobItems(searchText);

  const id = useActiveId();

  const jobItems = useJobContent(id);

  return (
    <>
      <Header searchText={searchText} setSearchText={setSearchText} />
      <Container loading={loading} jobList={JobItem} jobItems={jobItems} />
      {/* <Footer /> */}
    </>
  );
}

export default App;
