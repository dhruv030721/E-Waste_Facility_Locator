import "./login_page.css"
import NavBar from "../components/navbar"
import Field from "../components/InputFields"
import Button from "../components/Button"
import userIcon from "../assets/Images/UsernIcon.svg"
import LockIcon from "../assets/Images/LockIcon.svg"

const LoginPage = () => {
    return (
        <div className = "LoginMainDiv">
            <NavBar /> 
            <div className = "MainContainer">
                <div className = "Texts">
                    <span className = "WelcomeText"> Welcome </span>
                    <span className = "WeAreGladText"> We are glad to see you back with us!</span>
                </div>
                <div className = "fields">
                    <Field iconpath = {userIcon} placeholder={"Username"}/>
                    <Field iconpath = {LockIcon} placeholder={"Password"}/>
                    <Button text = {"Login"} />
                </div>
                <div className="SignupDiv">
                    <span className="ClickHereLinkText"> <a href="/signup">New Here? Click here to sign up.</a></span>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;