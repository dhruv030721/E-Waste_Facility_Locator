import { useState } from "react";
import TimeFrame from "./timeFrame";

const UserDashboard = () => {
  // eslint-disable-next-line no-unused-vars
  const [selectedTimeFrame, setSelectedTimeFrame] = useState("");

  const handleTimeFrameChange = (timeFrame) => {
    setSelectedTimeFrame(timeFrame);
  };
  return (
    <div className="UserDashboardMainDIv">
      <TimeFrame onTimeFrameChange={handleTimeFrameChange} />
    </div>
  );
};

export default UserDashboard;
