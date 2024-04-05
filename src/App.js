import React from "react";
import Headerr from "./project/header";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route, BrowserRouter } from "react-router-dom";
import CardsDetails from "./project/cardsDetails";
import Carts from "./project/cards";

function App() {
  return (
    <div>
         <Headerr/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Carts/>}/>
      <Route path="/cart" element={<CardsDetails/>}/>
    </Routes>

    </BrowserRouter>   
    </div>
  );
}

export default App;
