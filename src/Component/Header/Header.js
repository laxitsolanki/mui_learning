import React from "react";
import logo from "../../Asest/Mask group.png";
import "../Header/Header.css"
export default function Header() {
  return (
    <div>
      <div className="background">
        <div className="logo">
          <img src={logo} alt="mylogo" />
        </div>
      </div>
    </div>
  );
}
