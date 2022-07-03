import "./Question.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const axios = require("axios");

const Question = () => {
  //using axios to fetch https://leetcode.com/graphql with body of query{question(titleSlug:"two-sum") {content}}
  const [question, setQuestion] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const titleSlug = "two-sum";

  // const { titleSlug } = useParams();
  const questionApi = "https://leetcode.com/graphql";

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(questionApi, {
        query: `query{question(titleSlug:$titleSlug) {content}}`,
        // variables: { titleSlug: titleSlug},
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setQuestion(response.data.question.content);
    };
    fetchData();
  }, []);

  // let { questionTitle } = useParams();

  useEffect(() => {
    document.getElementsByClassName("card")[0].innerHTML = question;
  }, [question]);

  return (
    <div className="page">
      <div className="sectionTitle">Question: Two Sum</div>
      <div className="card"></div>
      <div className="questionDetails">
        <div>
          <div className="sectionTitle">Difficulty</div>
          <div className="card">easy</div>
        </div>
        <div>
          <div className="sectionTitle">Schedule</div>
          <div className="card">today</div>
        </div>
      </div>
    </div>
  );
};

export default Question;
