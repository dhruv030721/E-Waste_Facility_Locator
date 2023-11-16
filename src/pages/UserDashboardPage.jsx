import SideBar from "../components/sideBar";
<<<<<<< HEAD
import dashboardIcon from "../assets/Images/DashboardIcon.svg";
import locationIcon from "../assets/Images/locationIcon.png";
import settingsIcon from "../assets/Images/settingsIcon.svg";
import "./userDashboardPage.css";
import { useState } from "react";

const UserDashboardPage = () => {
  const [activeTab, setActiveTab] = useState("/UserDashboard");

  const handleTabClick = (tabName) => {
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
=======

const UserDashboardPage = () => {
  return (
    <div className="UserDashboardMainDiv">
      <SideBar />
>>>>>>> 3aeccaafdea56bb66e6adfb091871b57731998b2
    </div>
  );
};

export default UserDashboardPage;
