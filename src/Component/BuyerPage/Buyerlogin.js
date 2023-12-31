import React,{useState} from "react";
import "../../Component/BuyerPage/Buyerlogin.css";
import buyerimage from "../../Asest/buyerimage.png";
import logobuyer from "../../Asest/Mask group.png";
import Company from "../../Asest/compnyflag.png";
import bussiness from "../../Asest/busiiness-logo.png";
import groupbuyer from "../../Asest/buyerGroup.png";
import Profile from "../../Asest/Profile.png";
import call from "../../Asest/Call.png";
import Location from "../../Asest/Location.png";
import temple from "../../Asest/temple.png";
import Vector from "../../Asest/Vector.png";
import www from "../../Asest/www.png";
import locationl from "../../Asest/locationl.png";
import sellerbutton from "../../Asest/sellerbutton.png";
import buyerbutton from "../../Asest/buyerbutton.png";
import click from "../../Asest/click.png";
import unclick from "../../Asest/unclick.png";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";


const Buyerlogin = () => {
  const [isBuyerClicked, setIsBuyerClicked] = useState(true);

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
  const currencies = [
    {
      value: "USD",
      label: "Business category",
    },
    {
      value: "EUR",
      label: "Business category",
    },
    {
      value: "BTC",
      label: "Business category",
    },
    {
      value: "JPY",
      label: "Business category",
    },
  ];
  return (

    <>
      <div className="mainbuyer ">
        {/* step-1 backgroundimg */}
        <div className="buyerimage">
          {/* image div */}
          <div className="buyertext">
            {/* text div */}
            <p style={{ width: "70%" }}>
              {" "}
              Doing business in middle east made easy
            </p>
          </div>
          <img
            src={buyerimage}
            alt="buyerimage"
            className="buyerbackground-image"
          />
        </div>

        {/* step-2 Buyerlogin input */}
        <div className="maindivstep-1">
          <div className="mainlogostep-1">
            <img src={logobuyer} alt="logobuyer" />
            <div className="buyer-serviceprovide">
              <p>Ecommerce</p>
              <p>Commodity Trade</p>
              <p>Service</p>
            </div>
          </div>
          {/* text and check box */}
          <div className="mainbuyersecond-step">
            <div className="buyer-divteg1"> Hi there welcome</div>
            <div className="buyer-divteg20">
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
          {/* input feld  div*/}
          <div className="maininput-form">
            <div>
              <div className="buyerbussinessname-input">Business Details</div>
              <div className="buyerbussinesinput-type">
                <Box sx={{ "& > :not(style)": { mt: 3 } }}>
                  <TextField
                    style={{ width: "70%" }}
                    className="inputtypemain"
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
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": {
                      height: "auto",
                      margin: "10px 0px 0px 0px ",
                    },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <div>
                    <TextField
                      style={{ width: "70%" }}
                      id="standard-select-currency-native"
                      select
                      // label="Native select"
                      placeholder="Business category"
                      defaultValue=""
                      className="inputtextfield-business"
                      SelectProps={{
                        native: true,
                        startAdornment: (
                          <InputAdornment position="start">
                            <img src={bussiness} alt="msg"></img>
                            <span className="line-input"></span>
                          </InputAdornment>
                        ),
                      }}
                      variant="standard"
                    >
                      {currencies.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                  </div>

                  {/* second bussiness */}
                  <div>
                    <TextField
                      style={{ width: "70%" }}
                      id="standard-select-currency-native"
                      select
                      // label="Native select"
                      placeholder="Business category"
                      defaultValue=""
                      className="inputtextfield-business"
                      SelectProps={{
                        native: true,
                        startAdornment: (
                          <InputAdornment position="start">
                            <img src={groupbuyer} alt="msg"></img>
                            <span className="line-input"></span>
                          </InputAdornment>
                        ),
                      }}
                      variant="standard"
                    >
                      {currencies.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                  </div>
                </Box>
              </div>
            </div>
            {/* step-2 persnal detail */}
            <div className="mainbuyerpersonal">
              <div className="buyerpersonal">Personal Details</div>
              <Box sx={{ "& > :not(style)": { mt: 3 } }}>
                <TextField
                  style={{ width: "70%" }}
                  className="inputtypemain"
                  id="input-with-icon-textfield"
                  placeholder="frist name"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={Profile} alt="msg"></img>
                        <span className="line-input"></span>
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
                <TextField
                  style={{ width: "70%" }}
                  className="inputtypemain"
                  id="input-with-icon-textfield"
                  placeholder="last name"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={Profile} alt="msg"></img>
                        <span className="line-input"></span>
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
                <TextField
                  style={{ width: "70%" }}
                className="inputtypemain"
                id="input-with-icon-textfield"
                placeholder="Mobile number"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src={call} alt="call" />
                      <span className="line-input"></span>
                      <div className="inputnumber-main">
                        <input
                          style={{ width: "70%" }}
                          list="phone"
                          name="phone"
                          className="inputnumber"
                          placeholder="91+"
                          required=""
                          pattern="[0-9]{10}"
                        />
                        <br />
                        <datalist id="phone">
                          <option value="91+"></option>
                          <option value="92+"></option>
                          <option value="93+"></option>
                          <option value="94+"></option>
                          <option value="85+"></option>
                        </datalist>
                      </div>
                    </InputAdornment>
                  ),
                }}
                variant="standard"
              />
              </Box>
              

              <TextField
                style={{ width: "70%" }}
                className="inputtypemain"
                id="input-with-icon-textfield"
                placeholder="Address 1"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src={Location} alt="msg"></img>
                      <span className="line-input"></span>
                    </InputAdornment>
                  ),
                }}
                variant="standard"
              />
              <TextField
                style={{ marginTop: "10px",width: "70%" }}
                className="inputtypemain"
                id="input-with-icon-textfield"
                placeholder="Address 2"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src={Location} alt="msg"></img>
                      <span className="line-input"></span>
                    </InputAdornment>
                  ),
                }}
                variant="standard"
              />
              <Box sx={{ "& > :not(style)": { mt: 3 } }}>
                <TextField
                  style={{ width: "70%" }}
                  className="inputtypemain"
                  id="input-with-icon-textfield"
                  placeholder="City/Town"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={temple} alt="msg"></img>
                        <span className="line-input"></span>
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
                <div>
                  <TextField
                    style={{ width: "70%" }}
                    id="standard-select-currency-native"
                    select
                    // label="Native select"
                    placeholder="State"
                    defaultValue=""
                    className="inputtextfield-business"
                    SelectProps={{
                      native: true,
                      startAdornment: (
                        <InputAdornment position="start">
                          <img src={Vector} alt="msg"></img>
                          <span className="line-input"></span>
                        </InputAdornment>
                      ),
                    }}
                    variant="standard"
                  >
                    {currencies.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                </div>
                <div>
                  <TextField
                    style={{ width: "70%" }}
                    id="standard-select-currency-native"
                    select
                    // label="Native select"
                    placeholder="Country"
                    defaultValue=""
                    className="inputtextfield-business"
                    SelectProps={{
                      native: true,
                      startAdornment: (
                        <InputAdornment position="start">
                          <img src={www} alt="msg"></img>
                          <span className="line-input"></span>
                        </InputAdornment>
                      ),
                    }}
                    variant="standard"
                  >
                    {currencies.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                </div>
                <TextField
                  style={{ width: "70%" }}
                  className="inputtypemain"
                  id="input-with-icon-textfield"
                  placeholder="Postcode/Zip"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={locationl} alt="msg"></img>
                        <span className="line-input"></span>
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
              </Box>
            </div>
          </div>

          <div>
            <div className="buttonbuyer">
            <Link to="/mainbuyer1" target="">
              <button className="buttoncs">Next</button>
              </Link>
              <div>
              <span className="loginasbuyer">
                <a href="#" className="logingestbuyer">
                  Already have an Account?
                </a>
                Login
              </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Buyerlogin;
