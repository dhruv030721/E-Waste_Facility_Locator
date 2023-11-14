/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import "./signup_page.css";
import NavBar from "../components/navbar";
import Field from "../components/InputFields";
import CustomButton from "../components/Button";
import userIcon from "../assets/Images/UsernIcon.svg";
import LockIcon from "../assets/Images/LockIcon.svg";
import PhoneIcon from "../assets/Images/PhoneIcon.svg";
import EmailIcon from "../assets/Images/EmailIcon.svg";
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nameValid, setNameValid] = useState(true);
  const [phoneValid, setPhoneValid] = useState(true);
  const [usernameValid, setUsernameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(true);

  let navigate = useNavigate();

  const isUsernameValid = (username) => {
    return /^[a-z0-9_]+$/.test(username);
  };

  const isPhoneNumberValid = (phoneNumber) => {
    return /^\+?[0-9]{10,13}$/.test(phoneNumber);
  };

  const isEmailValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isPasswordValid = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleNextStep = () => {
    if (step === 1 && name && isPhoneNumberValid(phone)) {
      setStep((prevStep) => prevStep + 1);
    } else if (step === 2 && isUsernameValid(username) && isEmailValid(email)) {
      setStep((prevStep) => prevStep + 1);
    } else if (step === 3 && ( isPasswordValid(password) && isPasswordValid(confirmPassword) ) && password === confirmPassword) {
      console.log(password, confirmPassword);
      setStep((prevStep) => prevStep + 1);
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    // Implement logic for submitting the form
    console.log("Form submitted!");
    navigate('/login');
  };

  const handlePhoneChange = (e) => {
    const input = e.target.value.replace(/[^0-9+]/g, '');
    setPhone(input);
    setPhoneValid(isPhoneNumberValid(input));
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordValid(isPasswordValid(newPassword));
  };
  
  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    setConfirmPasswordValid(isPasswordValid(newConfirmPassword));
  };

  return (
    <div className="MainSignupBg">
      <NavBar />
      <div className="signupCpntainer">

        {step === 1 && (
          <>
            <div className="Texts">
              <span className="WelcomeText"> Step - 1 </span>
              <span className="WeAreGladText">
                {" "}
                Let's begin a new journey with us!
              </span>
            </div>
            <div className="fields">
              <Field
                iconpath={userIcon}
                placeholder={"Name"}
                type={"Text"}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setNameValid(!!e.target.value);
                }}
                isValid={nameValid}
              />
              <Field
                iconpath={PhoneIcon}
                placeholder={"Phone"}
                type={"Number"}
                value={phone}
                onChange={handlePhoneChange}
                isValid={phoneValid}
              />
              <CustomButton text={"Next"} onclick={handleNextStep} />
            </div>
            <div className="LoginRedirectDiv">
              <span className="ClickHereLinkText"> <a href="/login">Already have an account? Click here.</a></span>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div className="Texts">
              <span className="WelcomeText"> Step - 2 </span>
              <span className="WeAreGladText"> Now, let's add some details!</span>
            </div>
            <div className="fields">
              <Field 
                iconpath={userIcon} 
                placeholder={"Username"} 
                type={"Text"}
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  setUsernameValid(isUsernameValid(e.target.value));
                }}
                isValid={usernameValid} />
              <Field 
                iconpath={EmailIcon} 
                placeholder={"Email"} 
                type={"Email"}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailValid(isEmailValid(e.target.value));
                }}
                isValid={emailValid}
                />
              <CustomButton text={"Next"} onclick={handleNextStep} />
            </div>
          </>
        )}


        {step === 3 && (
          <>
            <div className="Texts">
              <span className="WelcomeText"> Step - 3 </span>
              <span className="WeAreGladText"> Final step! Submit your details.</span>
            </div>
            <div className="fields">
              <Field 
                iconpath={LockIcon} 
                placeholder={"Password"} 
                type={"Password"}
                value={password}
                onChange={handlePasswordChange}
                isValid={passwordValid}
              />
              <Field 
                iconpath={LockIcon} 
                placeholder={"Confirm Password"} 
                type={"Password"}
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                isValid={confirmPasswordValid}
                />
              <CustomButton text={"Submit"} onclick={handleNextStep} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SignupPage;