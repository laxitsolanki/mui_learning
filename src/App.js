import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainlogin from './Component/LoginPage/Mainlogin';

  // import Header from './Component/Header/Header'
  // import Footer from './Component/footer/Footer'

const App = () => {
  return (
    <div>
      {/* <Header/>
      <Footer/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Mainlogin/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
