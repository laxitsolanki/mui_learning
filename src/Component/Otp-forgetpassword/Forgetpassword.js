import React from 'react'
import "../../Component/Otp-forgetpassword/Forgetpassword.css";
import Header from '../Header/Header'
import Footer from '../footer/Footer'
import forgetpassword from '../../Asest/forgetpassword.png'
import forgetpaaswordl from '../../Asest/forgetpaaswordl.png'
import Company from '../../Asest/Message.png';
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";


const Forgetpassword = () => {
  return (
    <>
      <Header />
      <div className='mainforget'>
      <div className="imgotpmainf">
          <div className="Otptextf">
            {/* text div */}
            <p style={{ width: "70%" }}>
              Doing business in middle east made easy
            </p>
          </div>
          <img src={forgetpassword} alt="Otpimage" className="background-imageOtpf" />
        </div>
        <div className="main-2f">
          <div className="main2-1f">
            <img src={forgetpaaswordl} alt="Otpimage" className="otpphonef" />
            <div className="main2-2f">OTP Verification</div>
            <div className="write">
            Please enter your email which associate
                    to your account.
            </div>
            <div className="inputfieldf">
            <Box sx={{ "& > :not(style)": { mt: 1 , ml: 3} }}>
                  <TextField
                    style={{ width: "100%" }}
                    // className="write"
                    id="input-with-icon-textfield"
                    placeholder="Email address"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <img src={Company} alt="msg"></img>
                          <span className="line-input"></span>
                        </InputAdornment>
                      ),
                    }}
                    variant="standard"
                  />
                </Box>
            </div>
            <div>
              <Link to="/forgetpassword">
                <button className="buttonotpf">Send Now</button>
              </Link>
            </div>
          </div>
        </div>
   
      </div>
      <Footer />
    </>
  )
}

export default Forgetpassword
