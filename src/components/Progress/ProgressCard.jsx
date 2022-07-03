import "./ProgressCard.css";
import {LinearProgressWithLabel} from "@material-ui/core";

const ProgressCard = (props) => {
  return (
    <div className="progressCard">
      <div className="progressCardTitle">{props.name}</div>
      <div className="progressCardContent">{props.value}
      <span className="progressCardAim">/{props.aim}</span></div>
      {/* <LinearProgressWithLabel value={props.value/props.aim} /> */}
    </div>
  );
};

export default ProgressCard;
