/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from "react";
import "./Sidebar_Tabs.css";

const SidebarTabs = React.memo(
  ({ className, imagePath, optionText, nextRoute, isActive, onClick }) => {
    return (
      <div
        className={`sideBarOption ${isActive ? "active" : ""} ${className}`}
        onClick={onClick}
      >
        <div className="OptionimageTextDiv">
          <a className="" href={nextRoute}>
            <img src={imagePath} alt={optionText} />
            <span className="optionText">{optionText}</span>
          </a>
        </div>
      </div>
    );
  }
);

export default SidebarTabs;
