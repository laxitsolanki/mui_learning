import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainlogin from './Component/LoginPage/Mainlogin';
import Mainbuyer from './Component/BuyerPage/Mainbuyer';
import Mainbuyer1 from './Component/BuyerPage/Mainbuyer1';
import Mainseller1 from './Component/Sellerpage/Mainseller1';
import Mainseller2 from "./Component/Sellerpage/mainseller2";
import Otp from './Component/Otp-forgetpassword/Otp';
import Forgetpassword from './Component/Otp-forgetpassword/Forgetpassword';
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
          <Route path="/otp" element={< Otp/>} />
          <Route path="/forgetpassword" element={< Forgetpassword/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
