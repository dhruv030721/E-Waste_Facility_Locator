import { useState } from "react";
import DropdownCommon from "./DropdownCommon";
import CustomInfoCard from "./CustomInfoCard";
import RewardsIcon from "../assets/Images/RewardsIcon.svg";
import FacilityIcon from "../assets/Images/FacilityIcon.svg";
import "./UserDashboard.css";

const UserDashboard = () => {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState("last_seven_days");
  const [isTimeFrameDropdownOpen, setIsTimeFrameDropdownOpen] = useState(false);

  const timeFrameOptions = [
    { value: "last_seven_days", title: "Last 7 Days" },
    { value: "this_month", title: "This Month" },
    { value: "this_year", title: "This Year" },
    { value: "all_time", title: "All-Time" },
  ];

  return (
    <div className="UserDashboardMainDIv">
      <DropdownCommon
        selectedOption={selectedTimeFrame}
        setSelectedOption={setSelectedTimeFrame}
        isDropdownOpen={isTimeFrameDropdownOpen}
        setIsDropdownOpen={setIsTimeFrameDropdownOpen}
        options={timeFrameOptions}
        title="Timeframe"
      />

      <div className="InfoCardsDiv">
        <CustomInfoCard
          HeadingText={"Reward points"}
          ImagePath={RewardsIcon}
          texts={"82"}
        />
        <CustomInfoCard HeadingText={"E-Waste Submitted"} texts={"3.82 kg"} />
        <CustomInfoCard
          HeadingText={"Facilities Visited"}
          ImagePath={FacilityIcon}
          texts={"3"}
        />
        <CustomInfoCard HeadingText={"E-Waste Submitted"} texts={"4.89 kg"} />
      </div>
    </div>
  );
};

export default UserDashboard;
