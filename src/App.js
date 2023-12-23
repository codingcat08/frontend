import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import Select from "react-select";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css"; // Make sure to include the styles
import OtpImg from "./Lock.png";
import InputField from "./InputField";
import Message from "./LeftBanner";
import "./register.css";
import loanOptions from "./options"; // Assuming you have a file with loan options

const Register = () => {
  const [phno, setPhno] = useState("");
  const [isDisable, setIsDisable] = useState(false);
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    loanType: null, // Initialize loanType as null
    loanAmount: "",
  });

  const { name, email, loanType, loanAmount } = inputValue;

  const handleChange = (name, value) => {
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.success("Successful", {
      position: "top-center",
    });
    setIsDisable(true);
    setFlag(true);
  };

  return (
    <div className="registerWrapper">
      <div className="messageLogin">
        <Message />
      </div>
      <div className="userRegisterForm" style={{ display: !flag ? "flex" : "none" }}>
        <div className="midWrapperRegister">
          <div className="registerMessage">
            Sign Up to One
            <span className="changeCol font40 registerMessage">NDF</span>.in
          </div>
          <div className="welcomeMessage">
            Please enter your details to Sign Up.
          </div>
          <form onSubmit={handleSubmit} id="registerForm">
            <div className="nameWrap">
              <InputField
                type="text"
                value={name}
                placeholder="Full Name"
                name="name"
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </div>
            <div className="phonenumWrap">
              <PhoneInput
                defaultCountry="IN"
                value={phno}
                onChange={setPhno}
                placeholder="Enter Phone Number"
                required
              />
            </div>
            <div className="emailWrap">
              <InputField
                type="text"
                value={email}
                placeholder="Email"
                name="email"
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </div>
            <div className="emailWrap">
              <InputField
                type="text"
                value={email}
                placeholder="PAN"
                name="email"
                onChange={(e) => handleChange("pan", e.target.value)}
              />
            </div>
            <div className="loanTypeWrap">
              <label>Types of loan required</label>
              <Select
                options={loanOptions}
                value={loanType}
                onChange={(selectedOption) =>
                  handleChange("loanType", selectedOption)
                }
              />
            </div>
            <div className="loanAmountWrap">
              <InputField
                type="text"
                value={loanAmount}
                placeholder="Loan amount in INR"
                name="loanAmount"
                onChange={(e) => handleChange("loanAmount", e.target.value)}
              />
            </div>
            {/* Other form fields */}
            <Button
              type="submit"
              variant="primary"
              className="yellowBtn"
              form="registerForm"
              disabled={isDisable}
            >
              Next
            </Button>
          </form>
          <div className="termsConditions">
            By signing up, you are agreeing to our
            <span className="termsConditions" style={{ fontWeight: "700" }}>
              Terms And Conditions.
            </span>
          </div>
        </div>
      </div>
      {/* Remaining code... */}
    </div>
  );
};

export default Register;
