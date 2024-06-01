import { useEffect, useState } from "react";
import Container from "./Container";
// import Footer from "./Footer";
import Header from "./Header";
import { useJobItems } from "./hooks/hooks";

// API KEY

function App() {
  const [searchText, setSearchText] = useState("");
  const [JobItem, loading] = useJobItems(searchText);

  useEffect(() => {
    function Func() {
      console.log(window.location.hash);
    }

    window.addEventListener("hashchange", Func);

    return () => {
      window.removeEventListener("hashchange", Func);
    };
  }, []);

  return (
    <>
      <Header searchText={searchText} setSearchText={setSearchText} />
      <Container loading={loading} jobList={JobItem} />
      {/* <Footer /> */}
    </>
  );
}

export default App;
