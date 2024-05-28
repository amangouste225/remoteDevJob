import { useEffect, useState } from "react";
import Container from "./Container";
// import Footer from "./Footer";
import Header from "./Header";

// API KEY

function App() {
  const [jobList, setJobList] = useState([]);
  // const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");

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

  return (
    <>
      <Header searchText={searchText} setSearchText={setSearchText} />
      <Container loading={loading} jobList={jobList} />
      {/* <Footer /> */}
    </>
  );
}

export default App;
