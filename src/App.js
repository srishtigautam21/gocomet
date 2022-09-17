// import logo from './logo.svg';
import "./App.css";
import { ProductsPage } from "./pages/ProductPage/ProductsPage";
import { Navbar } from "./component/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { DetailsPage } from "./pages/DetailsPage/DetailsPage";

function App() {
  return (
    <div className='home-page'>
      <Navbar />
      <Routes>
        <Route path='/' element={<ProductsPage />} />
        <Route path='/productDetailsPage' element={<DetailsPage />} />
        {/* <Route path='/cart' element={<CartPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
