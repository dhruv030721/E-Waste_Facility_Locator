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
  let navigate = useNavigate();

  const handleNextStep = () => {
    console.log("1")
    setStep((prevStep) => prevStep + 1);
  };

  const handleSubmit = () => {
    // Implement logic for submitting the form
    console.log("Form submitted!");
    navigate('/login');
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
              <Field iconpath={userIcon} placeholder={"Name"} />
              <Field iconpath={PhoneIcon} placeholder={"Phone"} />
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
              <Field iconpath={userIcon} placeholder={"Username"} />
              <Field iconpath={EmailIcon} placeholder={"Email"} />
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
              <Field iconpath={LockIcon} placeholder={"Password"} />
              <Field iconpath={LockIcon} placeholder={"Confirm Password"} />
              <CustomButton text={"Submit"} onclick={handleSubmit} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SignupPage;