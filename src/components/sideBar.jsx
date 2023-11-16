/* eslint-disable react/prop-types */
// SideBar.js

import CustomButton from "./form_button";
import DashboardOptions from "./dashboard_options";
import userAvatar from "../assets/Images/userAvatar.png";
import "./sideBar.css";

const SideBar = ({ activeTab, handleTabClick, dashboardOptions }) => {
  return (
    <div className="SidebarMainDiv">
      <div className="LogoDetailsTabsContainer">
        <div className="LogoDiv">
          <img src="" alt="" />
          <span className="SidebarLogoName">Logo</span>
        </div>
        <div className="UserDetailsDiv">
          <img src={userAvatar} alt="" />
          <span className="UserNameText">Aetom</span>
          <span className="Role">Role</span>
        </div>
        <div className="DashboardPagesDiv">
          {dashboardOptions.map((option) => (
            <DashboardOptions
              key={option.nextRoute} // Assuming nextRoute is unique
              imagePath={option.imagePath}
              optionText={option.optionText}
              nextRoute={option.nextRoute}
              onClick={() => handleTabClick(option.nextRoute)}
              isActive={activeTab === option.nextRoute}
            />
          ))}
        </div>
      </div>
      <div className="LogoutBtnDIv">
        <CustomButton text={"Logout"} className={"LogOutButton"} />
      </div>
    </div>
  );
};

export default SideBar;
