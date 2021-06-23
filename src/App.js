import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/App.css";
import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./components/itemlistcontainer/ItemListContainer";
import Slider from "./components/slider/Slider";
//import AppRouter from "./routers/AppRouter"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Slider />
      <ItemListContainer greeting="Welcome! Thanks for your visit!" />
    </div>
  );
}

export default App;
