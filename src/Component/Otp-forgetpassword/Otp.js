import React, { useState } from "react";
import "../../Component/Otp-forgetpassword/Otp.css";
import Header from "../Header/Header";
import Footer from "../footer/Footer";
import photos from "../../Asest/otp.png";
import otpphone from "../../Asest/otpphone.png";
import { Link } from "react-router-dom";
import { MuiOtpInput } from "mui-one-time-password-input";

const Otp = () => {
  const [otp, setOtp] = React.useState("");

  const handleChange = (newValue) => {
    setOtp(newValue);
  };

  return (
    <div>
      <Header />
      <div className="main">
        <div className="imgotpmain">
          <div className="Otptext">
            {/* text div */}
            <p style={{ width: "70%" }}>
              {" "}
              Doing business in middle east made easy
            </p>
          </div>
          <img src={photos} alt="Otpimage" className="background-imageOtp" />
        </div>
        <div className="main-2">
          <div className="main2-1">
            <img src={otpphone} alt="Otpimage" className="otpphone" />
            <div className="main2-2">OTP Verification</div>
            <div style={{ display: "flex" }}>
              We just sent you 6-Digit OTP at
              <div className="numberotp">988 036 1974</div>
            </div>
            <div class="inputfield">
              <MuiOtpInput
                value={otp}
                numInputs={6} 
                onChange={handleChange}
              />
            </div>
            <div>
              <Link to="/forgetpassword">
                <button className="buttonotp">Confirm</button>
              </Link>
            </div>
            <div className="resentotp">RESEND OTP</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Otp;
