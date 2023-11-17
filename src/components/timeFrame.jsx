/* eslint-disable react/prop-types */
import { useState } from "react";
import "./timeFrame.css";
const TimeFrame = ({ onTimeFrameChange }) => {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState("last7days");

  const handleTimeFrameChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedTimeFrame(selectedOption);
    onTimeFrameChange(selectedOption);
  };

  return (
    <div className="time-frame-container">
      <label htmlFor="timeFrame">Timeframe: </label>
      <select
        id="timeFrame"
        value={selectedTimeFrame}
        onChange={handleTimeFrameChange}
      >
        <option value="last7days">Last 7 days</option>
        <option value="thisMonth">This Month</option>
        <option value="thisYear">This Year</option>
        <option value="allTime">All Time</option>
      </select>
    </div>
  );
};

export default TimeFrame;
