import "./ProgressCard.css";

const ProgressCard = (props) => {
  return (
    <div className="progressCard">
      <div className="progressCardTitle">{props.name}</div>
      <div className="progressCardContent">{props.value}
      <span className="progressCardAim">/200</span></div>
    </div>
  );
};

export default ProgressCard;
