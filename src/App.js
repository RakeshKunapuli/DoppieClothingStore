import React from "react";
import Home from "./IndexPage/Home";
import Accesories from "./AccesoriesPage/Accesories";
import Cart from "./CartPage/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Styles from "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Fashion from "./Fashion/Fashion";
import Footer from "./Footer/Footer";
import Specifications from "./ItemSpec/Specifications";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/fashion"} element={<Fashion/>} />
        <Route path={"/accesories"} element={<Accesories />} />
        <Route path={"/cart"} element={<Cart />} />
        <Route path={'/details/:id'} element={<Specifications/>}/>
        <Route path={'*'} element={<h1 style={{height:'49vh'}}>404 PAGE NOT FOUND</h1>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
   
  );
}

export default App;
