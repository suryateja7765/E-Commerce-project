import React from "react";
import Headerr from "./project/header";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from "react-router-dom";
import CardsDetails from "./project/cardsDetails";
import Carts from "./project/cards";
// import "./project/style.module.css"
function App() {
  return (
    <>
    <Headerr/>
    <Routes>
      <Route path="/" element={<Carts/>}/>
      <Route path="/cart/:id" element={<CardsDetails/>}/>
    </Routes>
   
    </>
  );
}
export default App;



