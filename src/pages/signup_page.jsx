/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import "./signup_page.css";
import NavBar from "../components/navbar";
import Field from "../components/InputFields";
import CustomButton from "../components/form_button";
import userIcon from "../assets/images/UsernIcon.svg";
import LockIcon from "../assets/images/LockIcon.svg";
import PhoneIcon from "../assets/images/PhoneIcon.svg";
import EmailIcon from "../assets/images/EmailIcon.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
    return /^(0|91)?[6-9][0-9]{9}$/.test(phoneNumber);
  };

  const isEmailValid = (email) => {
    return /^[a-z][^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isPasswordValid = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleNextStep = () => {
    if (step === 1 && name && isPhoneNumberValid(phone)) {
      handleNameChange;
      setStep((prevStep) => prevStep + 1);
    } else if (step === 2 && isUsernameValid(username) && isEmailValid(email)) {
      setStep((prevStep) => prevStep + 1);
    } else if (
      step === 3 &&
      isPasswordValid(password) &&
      isPasswordValid(confirmPassword) &&
      password === confirmPassword
    ) {
      console.log(password, confirmPassword);
      setStep((prevStep) => prevStep + 1);
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    // Implement logic for submitting the form
    handleHTTPPostRequest();
    console.log("Form submitted!");
    navigate("/login");
  };

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    setNameValid(newName);
  };

  const handlePhoneChange = (e) => {
    const input = e.target.value.replace(/[^0-9+]/g, "");
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
    setConfirmPasswordValid(newConfirmPassword);
    setConfirmPassword(newConfirmPassword);
  };

  const handleLogin = () => {
    navigate('/login');
  }
    const handleHTTPPostRequest = async () => {
      try {
        const headers = {
          "Content-Type": "application/json",
        };
        const response = await axios.post("http://127.0.0.1:8000/api/v1/signup", {
          name,
          phone,
          username,
          email,
          password,
        },
        {
          headers: headers,
        }
      );

      console.log("HTTP POST Request Response:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="MainSignupBg">
      <NavBar />
      <div className="signupCpntainer">
        {step === 1 && (
          <>
            <div className="Texts">
              <span className="StepText"> Step - 1 </span>
              <span className="WeAreGladText">
                {" "}
                Let's begin a new journey with us!
              </span>
            </div>
            <div className="Signupfields">
              <Field
                iconpath={userIcon}
                placeholder={"Name"}
                type={"Text"}
                value={name}
                onChange={handleNameChange}
                isValid={nameValid}
                validationMessage={"Can't be an empty."}
              />
              <Field
                iconpath={PhoneIcon}
                placeholder={"Phone"}
                type={"Number"}
                value={phone}
                onChange={handlePhoneChange}
                isValid={phoneValid}
                validationMessage="Only Indian phone numbers are valid. Do not include + symbol. Can use 0 or 91 as before number"
              />
              <CustomButton
                text={"Next"}
                onclick={handleNextStep}
                bgColor={"secondary"}
              />
            </div>
            <div className="LoginRedirectDiv">
              <span className="ClickHereLinkText">
                {" "}
                <a onClick={handleLogin}>Already have an account? Click here.</a>
              </span>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div className="Texts">
              <span className="WelcomeText"> Step - 2 </span>
              <span className="WeAreGladText">
                {" "}
                Now, let's add some details!
              </span>
            </div>
            <div className="Signupfields">
              <Field
                iconpath={userIcon}
                placeholder={"Username"}
                type={"Text"}
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  setUsernameValid(isUsernameValid(e.target.value));
                }}
                isValid={usernameValid}
                validationMessage={
                  "Should start with lowercase only. Should not contain any space & Uppercase character."
                }
              />
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
                validationMessage={
                  "Should not contain any space & Uppercase character."
                }
              />
              <CustomButton
                text={"Next"}
                onclick={handleNextStep}
                bgColor={"secondary"}
              />
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <div className="Texts">
              <span className="WelcomeText"> Step - 3 </span>
              <span className="WeAreGladText">
                {" "}
                Final step! Submit your details.
              </span>
            </div>
            <div className="Signupfields">
              <Field
                iconpath={LockIcon}
                placeholder={"Password"}
                type={"Password"}
                value={password}
                onChange={handlePasswordChange}
                isValid={passwordValid}
                validationMessage={
                  "Password should be at least 8 characters long. Password should contain at least one of each. 1 Uppercase, Lowercase, Special characters, and a digit. "
                }
              />

              <Field
                iconpath={LockIcon}
                placeholder={"Confirm Password"}
                type={"Password"}
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                isValid={confirmPasswordValid}
                validationMessage={"Both passwords does not match."}
              />

              <CustomButton
                text={"Submit"}
                onclick={handleNextStep}
                bgColor={"secondary"}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SignupPage;
