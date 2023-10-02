import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainlogin from './Component/LoginPage/Mainlogin';
import Mainbuyer from './Component/BuyerPage/Mainbuyer';


const App = () => {
  return (
    <div>
      {/* <Header/>
      <Footer/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Mainlogin/>} />
          <Route path="/mainbuyer" element={< Mainbuyer/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
