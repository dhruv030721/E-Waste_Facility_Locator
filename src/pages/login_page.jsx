import "./login_page.css";
import NavBar from "../components/navbar";
import Field from "../components/InputFields";
import CustomButton from "../components/form_button";
import userIcon from "../assets/Images/UsernIcon.svg";
import LockIcon from "../assets/Images/LockIcon.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [usernameValid, setUsernameValid] = useState(true);
  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(true);
  const [errorMsgClass, setErrorMsgClass] = useState("");

  const isUsernameValid = (username) => {
    return /^[a-z][a-z0-9_]*$/.test(username);
  };

  const isPasswordValid = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
    return passwordRegex.test(password);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordValid(isPasswordValid(newPassword));
  };

  const handleLogin = () => {
    const isUsernameValidResult = isUsernameValid(username);
    const isPasswordValidResult = isPasswordValid(password);

    if (isUsernameValidResult && isPasswordValidResult) {
      if (username === "aetom23" && password === "Aetom@1234") {
        navigate("/UserDashboard");
      } else if (username === "anasvhora8" && password === "Anas@2906") {
        navigate("/AdminDashboard");
      } else {
        setErrorMsgClass("displayErrorMsg");
      }
    } else {
      setErrorMsgClass("displayErrorMsg");
    }
  };

  const handleSignup = () => {
    navigate("/signup");
  }

  return (
    <div className="LoginMainDiv">
      <NavBar />
      <div className="MainContainer">
        <div className="Texts">
          <span className="WelcomeText"> Welcome </span>
          <span className="WeAreGladText">
            {" "}
            We are glad to see you back with us!
          </span>
        </div>
        <div className="Loginfields">
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

          <CustomButton
            text={"Login"}
            bgColor={"secondary"}
            onclick={handleLogin}
          />
          <div
            className={`ErrorMsgDiv ${errorMsgClass}`}
            style={
              errorMsgClass === "displayErrorMsg"
                ? { display: "block", color: "#EF0606" }
                : { display: "none" }
            }
          >
            <span>Username or Password invalid! Please check again.</span>
          </div>
        </div>
        <div className="SignupRedirectDiv">
          <span className="ClickHereLinkText">
            <a onClick={handleSignup}>New Here? Click here to sign up.</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
