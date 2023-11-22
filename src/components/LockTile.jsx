import "./LockTile.css";

const LockTile = () => {
  return (
    <div className="Container">
      <input type="checkbox" className="checkbox"></input>
      <div className="check-bg"></div>
      <div className="checkmark">
        <svg viewBox="0 0 100 100">
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="15"
            stroke="#FFF"
            fill="none"
            d="M20,55 L40,75 L77,27"
          ></path>
        </svg>
      </div>
      <div className="Locked">Locked</div>
      <div className="DoesNotAllowYourSelfToSpendYourRewardPoints">
        Does not allow yourself to spend your reward points
      </div>
      <div className="Toggle">
        <div className="DivEmber1335Before" />
        <div className="DivEmber1335After" />
      </div>
    </div>
  );
};

export default LockTile;
