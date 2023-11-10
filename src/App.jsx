import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Hero from "./components/Hero";
// import Product from "./components/Product";
// import CartItem from "./components/CartItem ";
const App = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Sidebar />
      <Footer />
    </div>
  );
};

export default App;
