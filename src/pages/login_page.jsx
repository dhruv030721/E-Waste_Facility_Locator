import "./login_page.css"
import NavBar from "../components/navbar"
import Field from "../components/InputFields"
import CustomButton from "../components/form_button"
import userIcon from "../assets/Images/UsernIcon.svg"
import LockIcon from "../assets/Images/LockIcon.svg"
import { useState } from "react"

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [usernameValid, setUsernameValid] = useState(true);
    const [password, setPassword] = useState("");
    const [passwordValid, setPasswordValid] = useState(true);

    const isUsernameValid = (username) => {
        return /^[a-z][a-z0-9_]*$/.test(username);
    };

    const isPasswordValid = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
        return passwordRegex.test(password);
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        setPasswordValid(isPasswordValid(newPassword));
    };


    return (
        <div className = "LoginMainDiv">
            <NavBar /> 
            <div className = "MainContainer">
                <div className = "Texts">
                    <span className = "WelcomeText"> Welcome </span>
                    <span className = "WeAreGladText"> We are glad to see you back with us!</span>
                </div>
                <div className = "Loginfields">

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
                        validationMessage={"Should start with lowercase only. Should not contain any space & Uppercase character."}
                    />

                    <Field 
                        iconpath={LockIcon} 
                        placeholder={"Password"} 
                        type={"Password"}
                        value={password}
                        onChange={handlePasswordChange}
                        isValid={passwordValid}
                        validationMessage={"Password should be at least 8 characters long. Password should contain at least one of each. 1 Uppercase, Lowercase, Special characters, and a digit. "}
                    />

                    <CustomButton text = {"Login"} />

                </div>
                <div className="SignupRedirectDiv">
                    <span className="ClickHereLinkText"> <a href="/signup">New Here? Click here to sign up.</a></span>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;