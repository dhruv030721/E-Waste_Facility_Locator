import "./LockTile.css";

const LockTile = () => {
  return (
    <div className="Container">
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
