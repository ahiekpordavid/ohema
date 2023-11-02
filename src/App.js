import React from "react";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Checkout from "./pages/Checkout";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const App = () => {
  return (
    <div className="h-full">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/product/:id" element={<ProductDetails/>} />
          <Route path="/checkout" element={<Checkout/>} />
        </Routes>
        <Sidebar/>
        <Footer />
      </BrowserRouter>
    <ToastContainer />
    </div>
  );
};

export default App;
