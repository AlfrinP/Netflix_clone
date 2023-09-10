import Footer from "./components/screens/Footer";
import Header from "./components/screens/Header";
import Home from "./components/screens/Home";
import "./app.css";
import Banner from "./components/screens/Banner";
import RowPost from "./components/screens/RowPost";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <RowPost/>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
