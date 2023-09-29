import React from "react";
import "../../Component/LoginPage/Login.css";
import login1 from "../../Asest/login1.png";
import logo from "../../Asest/Mask group.png";
import mesg from "../../Asest/Message.png";
import look from "../../Asest/Lock.png";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <>
      <div className="mainLogin1">
        <div className="backgroundlogin">
          <div className="backgroundtext">
            <p style={{ width: "70%" }}>
              {" "}
              Doing business in middle east made easy
            </p>
          </div>
          <img src={login1} alt="login1" className="imagelogin1" />
        </div>

        <div className="logininput">
          {/* logo and span 3 */}
          <div className="loginlogo">
            <img src={logo} alt="mylogo" className="mylogo1" />
            <div className="serviceprovide">
              <p>Ecommerce</p>
              <p>Commodity Trade</p>
              <p>Service</p>
            </div>
          </div>
          {/* welcome and input */}
          <div className="inputtypelogin1">
            <div className="divteg1"> Welcome back</div>
            <div className="divteg2">
              Please login your account to continue.
            </div>
            {/* <form action="">
              <img src={mesg} alt="" />
              <span class="vl"></span>
              <input
                type="email"
                id="email"
                name="email"
                className="inputtypemain"
                placeholder="Email address"
              />
              <br />
              <img src={look} alt="" />
              <span class="vl"></span>
              <input
                type="password"
                id="pwd"
                name="pwd"
                minlength="8"
                className="inputtypemain"
                placeholder="Password"
              />
              <img src={hide} alt="" />
            </form> */}
            <Box sx={{ "& > :not(style)": { mt: 3 } }}>
              <TextField
                className="inputtypemain"
                id="input-with-icon-textfield"
                placeholder="Email address"
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
            </Box>
          </div>
          <div className="step3">
            <p>
              <a href="#" className="forget">
                Forget password?
              </a>
            </p>
            <button className="buttoncs">Log in</button>
            <div style={{ display: "flex", marginTop: "20px" }}>
              <span className="haveaccount">Don’t have an Account?</span>
              <Link to="/Buyear" className="create">
                create account
              </Link>
            </div>
            <span className="loginas">
              <a href="#" className="logingest">
                login{" "}
              </a>
              As Guest
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
