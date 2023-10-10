import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainlogin from './Component/LoginPage/Mainlogin';
import Mainbuyer from './Component/BuyerPage/Mainbuyer';
import Mainbuyer1 from './Component/BuyerPage/Mainbuyer1';
import Mainseller1 from './Component/Sellerpage/Mainseller1';
import Mainseller2 from "./Component/Sellerpage/mainseller2";
const App = () => {
  return (
    <div>
      {/* <Header/>
      <Footer/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Mainlogin/>} />
          <Route path="/mainbuyer" element={< Mainbuyer/>} />
          <Route path="/mainbuyer1" element={< Mainbuyer1/>} />
          <Route path="/mainseller1" element={< Mainseller1/>} />
          <Route path="/Mainseller2" element={< Mainseller2/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
