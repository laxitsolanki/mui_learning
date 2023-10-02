import React from "react";
import "../footer/Footer.css";
import logo from "../../Asest/image 8.png";
import qr from "../../Asest/image 1.png";
import app from "../../Asest/app.png";
const Footer = () => {
  return (
    <div>
      <div className="footerbackground">
        <div className="content">
          <div>
            <img src={logo} alt="mylogo" />
          </div>
          <div className="textdecription">
            BigTrader is an Online B2B platform in Qatar. We provide Online
            platform serving as a marketplace for 
            connecting suppliers and buyers in Qatar for selling and promoting
            their products.
          </div>
          <div className="qrtext">
            Scan this QR code to contact us
            <div className="qrlogo">
              <img src={qr} alt="myqr" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer2">
      <span className="footerfollow">Follow us</span> 
      <img src={app} alt="myapp" className="footerapp" />
      <span className="footer2021">2021 Bigtrader.biz . All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
