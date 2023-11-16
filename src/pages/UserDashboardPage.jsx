import SideBar from "../components/sideBar";
import dashboardIcon from "../assets/Images/DashboardIcon.svg";
import locationIcon from "../assets/Images/locationIcon.png";
import settingsIcon from "../assets/Images/settingsIcon.svg";
import "./userDashboardPage.css";
import { useState } from "react";

const UserDashboardPage = () => {
  const [activeTab, setActiveTab] = useState("/UserDashboard");

  const handleTabClick = (tabName) => {
    console.log("Tab clicked:", tabName);
    setActiveTab(tabName);
  };

  const dashboardOptions = [
    {
      imagePath: dashboardIcon,
      optionText: "Dashboard",
      nextRoute: "/UserDashboard",
    },
    {
      imagePath: locationIcon,
      optionText: "Locate",
      nextRoute: "/UserLocate",
    },
    {
      imagePath: settingsIcon,
      optionText: "Settings",
      nextRoute: "/UserSettings",
    },
  ];

  return (
    <div className="UserDashboardMainDiv">
      <div className="SideBarDashboardContainer">
        <SideBar
          activeTab={activeTab}
          handleTabClick={handleTabClick}
          dashboardOptions={dashboardOptions}
        />
      </div>
    </div>
  );
};

export default UserDashboardPage;
