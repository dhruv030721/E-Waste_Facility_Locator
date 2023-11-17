import { useState } from "react";
import DropdownCommon from "./DropdownCommon";

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
    </div>
  );
};

export default UserDashboard;
