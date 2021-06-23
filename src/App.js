import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/App.css";
import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./components/itemlistcontainer/ItemListContainer";
import Slider from "./components/slider/Slider";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Slider />
      <ItemListContainer greeting="Welcome to our site, visitors!" />
    </div>
  );
}

export default App;
