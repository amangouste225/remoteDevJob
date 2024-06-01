import { useState } from "react";
import Container from "./Container";
// import Footer from "./Footer";
import Header from "./Header";
import { useJobItems } from "./hooks/hooks";

// API KEY

function App() {
  const [searchText, setSearchText] = useState("");

  const { jobList, loading } = useJobItems(searchText);
  return (
    <>
      <Header searchText={searchText} setSearchText={setSearchText} />
      <Container loading={loading} jobList={jobList} />
      {/* <Footer /> */}
    </>
  );
}

export default App;
