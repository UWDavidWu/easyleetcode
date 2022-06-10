import { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./Progress.css";
import ProgressCard from "./ProgressCard";

const Progress = () => {
  //query from db and then fetch then show the diff
  const [easy, setEasy] = useState(26);
  const [medium, setMedium] = useState(7);
  const [hard, setHard] = useState(1);

  ChartJS.register(ArcElement, Tooltip);
  const data = {
    labels: ["Easy", "Medium", "Hard"],
    datasets: [
      {
        data: [easy, medium, hard],
        backgroundColor: [
          "rgba(0, 184, 163, 0.6)",
          "rgba(247, 186, 31, 0.6)",
          "rgba(255, 99, 132, 0.6)",
        ],
        borderColor: [
          "rgba(0, 184, 163, 1)",
          "rgba(247, 186, 31, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 2,
      },
    ],
  };

  //   useEffect(() => {
  //     fetch("https://leetcode-stats-api.herokuapp.com/davidwu2020")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setEasy(data.easySolved);
  //         setMedium(data.mediumSolved);
  //         setHard(data.hardSolved);
  //       });
  //   }, []);

  return (
    <div className="progressContainer">
      <div className="percentage" style={{ width: "30%" }}>
        <Doughnut data={data} />
      </div>
      <div className="progressCardContainer">
        <ProgressCard value={easy} name="Easy"/>
        <ProgressCard value={medium} name="Medium"/>
        <ProgressCard value={hard} name="Hard"/>
      </div>
    </div>
  );
};

export default Progress;
