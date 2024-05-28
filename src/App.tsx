import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  return (
    <>
      <Header />
      <Container className="max-w-screen-lg border mx-auto bg-blue-400" />
      <Footer />
    </>
  );
}

export default App;
