import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainlogin from './Component/LoginPage/Mainlogin';
import Mainbuyer from './Component/BuyerPage/Mainbuyer';
import Mainbuyer1 from './Component/BuyerPage/Mainbuyer1';
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
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
