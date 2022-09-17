// import logo from './logo.svg';
import "./App.css";
import { ProductsPage } from "./pages/ProductPage/ProductsPage";
import { Navbar } from "./component/Navbar/Navbar";

function App() {
  return (
    <div className='home-page'>
      <Navbar />
      <ProductsPage />
    </div>
  );
}

export default App;
