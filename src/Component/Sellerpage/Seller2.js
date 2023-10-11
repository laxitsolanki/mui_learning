import "../../Component/Sellerpage/Seller2.css";
import backgroundimg2 from "../../Asest/backgroundbuyer2.png";
import logobuyer from "../../Asest/Mask group.png";
import call from "../../Asest/Call.png";
import mesg from "../../Asest/Message.png";
import look from "../../Asest/Lock.png";
import trade from "../../Asest/trade.png";
import sellerbutton from "../../Asest/sellerbutton.png";
import buyerbutton from "../../Asest/buyerbutton.png";
import click from "../../Asest/click.png";
import unclick from "../../Asest/unclick.png";

import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import React, { useRef, useState } from "react";
import { Button } from "@mui/material";
const Seller2 = () => {
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    // Trigger the click event of the hidden file input
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      console.log(`Selected file: ${selectedFile.name}`);
      // You can perform further actions with the selected file here
    }
  };
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
// 
const [isBuyerClicked, setIsBuyerClicked] = useState(false);

const toggleBuyerClick = () => {
  setIsBuyerClicked(!isBuyerClicked);
};

const buyerButtonStyle = {
  display: 'flex',
  backgroundColor: isBuyerClicked ? '#F3E4E1' : '#FFF',
  borderRadius: '15px',
  width: '200px',
  height: '50px',
  justifyContent: 'flex-start',
  padding: '0px 0px 0px 30px',
  color: 'black',
  marginRight: '10px', // Fixed the typo here
  left: '5px',
};

const sellerButtonStyle = {
  display: 'flex',
  backgroundColor: !isBuyerClicked ? '#F3E4E1' : '#FFF',
  borderRadius: '15px',
  width: '200px',
  height: '50px',
  justifyContent: 'flex-start',
  padding: '0px 0px 0px 30px',
  color: 'black',
  marginRight: '10px',
  left: '5px',
};
  return (
    <>
     <div className="mainbuyer2">
        <div className="backgroundlogin2">
          <div className="backgroundtext2">
            <p style={{ width: "70%" }}>
              Doing business in middle east made easy
            </p>
          </div>
          <img src={backgroundimg2} alt="login1" className="imagelogin2" />
        </div>
        {/* mainbuyerstep-2 */}
        <div className="maincss">
          <div className="mainbuyerstep2">
            <div className="mainlogostep-2">
              <img src={logobuyer} alt="logobuyer" />
              <div className="buyer-serviceprovide2">
                <p>Ecommerce</p>
                <p>Commodity Trade</p>
                <p>Service</p>
              </div>
            </div>
            {/* text and check box */}
            <div className="mainbuyersecond-step">
              <div className="buyer-divteg2"> Hi there welcome</div>
              <div className="buyer-divteg12">
                Please login your account to continue.
              </div>
              <div className="mainradio-button2">
              <Link to="/mainbuyer" className="create">
                {/* <Button
                  style={{
                    display: "flex",
                    backgroundColor: "#F3E4E1",
                    borderRadius:"15px",
                    width: "200px",
                    height: "50px",
                    justifyContent: "flex-start",
                    padding: "0px 0px 0px 30px",
                    color:"black",
                    right: "5px",
                  }}
                  startIcon={
                    <img
                      src={buyerbutton}
                      alt=""
                      className="buyerbutton"
                      style={{ margin: "0px 5px 0px 0px " }}
                    />
                  }
                >
                  Buyer
                </Button> */}
                <Button
        style={buyerButtonStyle}
        startIcon={
          <img
            src={isBuyerClicked ? click : unclick}
            alt=""
            className="buyerbutton"
            style={{ margin: '0px 5px 0px 0px ' }}
          />
        }
        onClick={toggleBuyerClick}
      >
        Buyer
      </Button>
                </Link>
                <Link to="/mainseller1" className="create">
                {/* <Button
                  style={{
                    display: "flex",
                    backgroundColor: "#FFF",
                    borderRadius:"15px",
                    width: "200px",
                    height: "50px",
                    justifyContent: "flex-start",
                    padding: "0px 0px 0px 30px",
                    color:"black",
                    marginright: "10px",
                    left: "5px",
                  }}
                  startIcon={
                    <img
                      src={sellerbutton}
                      alt=""
                      className="buyerbutton"
                      style={{ margin: "0px 5px 0px 0px " }}
                    />
                  }
                >
                  seller
                </Button> */}
                <Button
        style={sellerButtonStyle}
        startIcon={
          <img
            src={!isBuyerClicked ? click : unclick}
            alt=""
            className="sellerbutton"
            style={{ margin: '0px 5px 0px 0px ' }}
          />
        }
        onClick={toggleBuyerClick}
      >
        Seller
      </Button>
                </Link>
              </div>
            </div>
            <div className="maininput-form">
              <div>
                <div className="buyerbussinessname-input2">
                  Business Details
                </div>
                <div className="buyerbussinesinput-type2">
                  <Box sx={{ "& > :not(style)": { mt: 3 } }}>
                    <TextField
                      className="inputtypemain"
                      id="input-with-icon-textfield"
                      placeholder="Company telephone number"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <img src={call} alt="msg"></img>
                            <span className="line-input2"></span>
                          </InputAdornment>
                        ),
                      }}
                      variant="standard"
                    />
                    <TextField
                      className="inputtypemain"
                      id="input-with-icon-textfield"
                      placeholder="Email address"
                      name="text"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <img src={mesg} alt="msg"></img>
                            <span class="vl"></span>
                          </InputAdornment>
                        ),
                      }}
                      variant="standard"
                    />
                    <br />
                    <TextField
                      className="inputtypemain"
                      id="standard-password-input"
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      name="text"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <img src={look} alt="msg"></img>
                            <span class="vl"></span>
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        ),
                      }}
                      variant="standard"
                    />
                    <TextField
                      className="inputtypemain"
                      id="input-with-icon-textfield"
                      placeholder="Confirm Password"
                      name="text"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <img src={look} alt="msg"></img>
                            <span class="vl"></span>
                          </InputAdornment>
                        ),
                      }}
                      variant="standard"
                    />
                    <TextField
                      className="inputtypemain"
                      id="input-with-icon-textfield"
                      placeholder="Trade license number (Optional)"
                      name="text"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <img src={trade} alt="msg"></img>
                            <span class="vl"></span>
                          </InputAdornment>
                        ),
                      }}
                      variant="standard"
                    />
                    <TextField
                      className="inputtypemain"
                      id="input-with-icon-textfield"
                      placeholder="Trade license expiry date (Optional)"
                      name="text"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <img src={trade} alt="msg"></img>
                            <span class="vl"></span>
                          </InputAdornment>
                        ),
                      }}
                      variant="standard"
                    />

                    <div className="mybussiness">
                      My business is not eligible for a VAT Certificate.
                      <Checkbox
                        {...label}
                        defaultChecked
                        style={{ color: "#DC4326", marginLeft: "5%" }}
                      />
                    </div>
                    <TextField
                      className="inputtypemain"
                      id="input-with-icon-textfield"
                      placeholder="VAT/TAX Reg Number (Optional)"
                      name="text"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <img src={trade} alt="msg"></img>
                            <span class="vl"></span>
                          </InputAdornment>
                        ),
                      }}
                      variant="standard"
                    />
                  </Box>
                </div>
              </div>
              {/* lll */}
              {/* <div> */}
              <div className="choseop">
                Upload document (CR Copy / Trade license copy/GST)
                <br />
                (Optional)
              </div>
              <div className="clickable-image">
                <img
                  src={require("../../Asest/file.png")} // Replace with your image URL
                  alt="Click me"
                  onClick={handleImageClick}
                />
                <input
                  type="file"
                  accept=".jpg, .jpeg, .png, .gif" // Specify the allowed file types
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
              </div>
              <div className="choseop">
                Upload document(Vat Certification/Tax Certification)
                <br />
                (Optional)
              </div>
              <div className="clickable-image">
                <img
                  src={require("../../Asest/file.png")} // Replace with your image URL
                  alt="Click me"
                  onClick={handleImageClick}
                />
                <input
                  type="file"
                  accept=".jpg, .jpeg, .png, .gif" // Specify the allowed file types
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
              </div>
              <div className="mainlast-seller">
              <Checkbox
                {...label}
                defaultChecked
                style={{ marginLeft: "5px" }}
              />
              <span className="already1">Agree to user</span>
              <Link to="/Buyear2" className="create">
                Terms & Conditions and &nbsp;&nbsp;Privacy Policy
              </Link>

              <Link to="/otp">
                <button className="buttonbuyer">create now</button>
              </Link>
              <div className="loginspan2">
                <div className="ittakesbuyer">
                  (It takes 2 days to verify your profile)
                </div>
                <div className="alreadyhave2">
                  <span className="alreadybuyer">
                    Already have an Account?
                    <Link to="/Seller" className="create">
                      Login
                    </Link>
                  </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </>
  )
}

export default Seller2
