import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/App.css'; 
import NavBar from './components/NavBar'; 
import ItemListContainer from "./components/ItemListContainer";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting = "Welcome to our site, visitors!" /> 
    </div>
  );
}

export default App;
 