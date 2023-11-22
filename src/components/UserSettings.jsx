import { useState } from "react";
import Field from "./InputFields";
import ProfilePic from "./ProfilePic";
import "./UserSettings.css";
import LockTile from "./LockTile";

const UserSettings = () => {
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

  return (
    <div className="UserSettingsMainDiv">
      <div className="UserProfilePicDiv">
        <ProfilePic />
      </div>
      <div className="MainSettingsDiv">
        <div className="fourinputcontainer">
          <div className="InputLabelFieldDiv">
            <label htmlFor="username">Display Name</label>

            <Field
              placeholder={"Name"}
              type={"Text"}
              value={name}
              onChange={handleNameChange}
              isValid={nameValid}
              validationMessage={"Can't be an empty."}
            />
          </div>

          <div className="InputLabelFieldDiv">
            <label htmlFor="username">USERNAME</label>

            <Field
              type={"Text"}
              value={username}
              placeholder={"Username"}
              onChange={(e) => {
                setUsername(e.target.value);
                setUsernameValid(isUsernameValid(e.target.value));
              }}
              isValid={usernameValid}
              validationMessage={"Username not valid."}
            />
          </div>

          <div className="InputLabelFieldDiv">
            <label htmlFor="email">EMIAL</label>

            <Field
              placeholder={"Email"}
              type={"Email"}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailValid(isEmailValid(e.target.value));
              }}
              isValid={emailValid}
              validationMessage={"Enter a valid email address."}
            />
          </div>

          <div className="InputLabelFieldDiv">
            <label htmlFor="phone no">PHONE NO</label>

            <Field
              placeholder={"Phone"}
              type={"Number"}
              value={phone}
              onChange={handlePhoneChange}
              isValid={phoneValid}
              validationMessage="Enter a valid phone number"
            />
          </div>
        </div>
        <div className="Lockrewardspenttile">
          <LockTile />
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
