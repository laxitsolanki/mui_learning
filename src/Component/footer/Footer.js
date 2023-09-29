import React from "react";
import "../footer/Footer.css";
import logo from "../../Asest/image 8.png";
import qr from "../../Asest/image 1.png";

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
    </div>
  );
};

export default Footer;
