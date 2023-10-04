import React from 'react'
import "../../Component/BuyerPage/Buyerlogin1.css";
import backgroundimg2  from "../../Asest/backgroundbuyer2.png";
import logobuyer from "../../Asest/Mask group.png";
import call from "../../Asest/Call.png";
import mesg from "../../Asest/Message.png";
import look from "../../Asest/Lock.png";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
const Buyerlogin1 = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <>
      <div className='mainbuyer2'>
      <div className="backgroundlogin2" >
          <div className="backgroundtext2">
            <p style={{ width: "70%" }}>
              Doing business in middle east made easy
            </p>
          </div>
          <img src={backgroundimg2} alt="login1" className="imagelogin2" />
        </div>
        <div className='mainbuyerstep2'>
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
              <FormControl>
                <RadioGroup   
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="buyer"
                    control={<Radio />}
                    label="buyer"
                    className="buyer-radio-buttons2"
                  />
                  <FormControlLabel
                    value="seller"
                    control={<Radio />}
                    label="seller"
                    className="seller-radio-buttons2"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
          <div className="maininput-form">
          <div>
              <div className="buyerbussinessname-input2">Business Details</div>
              <div className="buyerbussinesinput-type">
                <Box sx={{ "& > :not(style)": { mt: 3 } }}>
                  <TextField
                    style={{ width: "70%" }}
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
                </Box>
                <Box sx={{ "& > :not(style)": { mt: 3 } }}>
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
            </Box>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Buyerlogin1
