import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/App.css";
import ItemDetail from "./components/itemdetail/ItemDetail";
import AppRouter from "./routers/AppRouter";
import Footer from "./components/footer/Footer"
//import { CartProvider } from "./context/CartContext";
//import CartContent from "./components/cartcontent/CartContent"

function App() {
  return (
    <div className="App">      
        <AppRouter />
        <ItemDetail />  
        <Footer />  
    </div>
  );
}

export default App;
