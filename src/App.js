import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/App.css";
import ItemDetail from "./components/itemdetail/ItemDetail";
import AppRouter from "./routers/AppRouter";
import { CartProvider } from "./context/CartContext";
import CartContent from "./components/cartcontent/CartContent"

function App() {
  return (
    <div className="App">
      
      <CartProvider>
        <AppRouter />
        <ItemDetail />
        <CartContent/>
      </CartProvider>
    </div>
  );
}

export default App;
