import ProfilePic from "./ProfilePic";
import "./UserSettings.css";

const UserSettings = () => {
  return (
    <div className="UserSettingsMainDiv">
      <div className="UserProfilePicDiv">
        <ProfilePic />
      </div>
      <div className="MainSettingsDiv">
        <inputSettingss label={"username"} placeholder="Peter Griffin" />
      </div>
    </div>
  );
};

export default UserSettings;
