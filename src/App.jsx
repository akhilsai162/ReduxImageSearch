import "./App.css";
import { Provider } from "react-redux";
import ProductList from "./ProductList";
import store from "./store/store";
import Navbar from "./Navbar";
import Carousell from "./Carousell";

// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Carousell />
      <ProductList />
    </Provider>
  
  );
}

export default App;
