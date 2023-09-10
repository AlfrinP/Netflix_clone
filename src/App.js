import Footer from "./components/screens/Footer";
import Header from "./components/screens/Header";
import Home from "./components/screens/Home";
import "./app.css";
import Banner from "./components/screens/Banner";
import RowPost from "./components/screens/RowPost";
import { originals , action } from "./components/Urls";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <RowPost title='Netflix Originals' className='max-h-[250px] mr-[10px] cursor-pointer hover:scale-110' url={originals}/>
      <RowPost title='Action' className='max-h-[150px] mr-[10px] cursor-pointer hover:scale-110' url={action}/>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
