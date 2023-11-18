/* eslint-disable react/prop-types */
import CustomButton from "./form_button";
import SidebarTabs from "./Sidebar_Tabs";
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
            <SidebarTabs
              key={option.optionText}
              imagePath={option.imagePath}
              optionText={option.optionText}
              onClick={handleTabClick}
              isActive={activeTab === option.optionText}
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
