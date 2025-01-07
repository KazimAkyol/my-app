import React, { useState } from "react";
import "./AIntroduce.css";
import Dropdown from "../../components/dropdown/Dropdown";
import { useNavigate } from "react-router-dom";

const AIntroduce = () => {
  const difficulty = ["easy", "medium", "hard"];
  const [difficultyChange, setDifficultyChange] = useState("");
  const navigate = useNavigate();
  const TOTAL_QUESTIONS = 10;

  console.log(difficultyChange, "difficultyChange");

  const startQuiz = () => {
    if (difficultyChange) {
      navigate(`/quiz/${difficultyChange}/${TOTAL_QUESTIONS}`);
    }
  };

  return (
    <div className="introduce">
      <div className="introduce-container">
        <img
          src="https://img.freepik.com/vektoren-premium/quiz-logo-mit-sprechblasen-symbol_149152-813.jpg"
          alt=""
        />
        <Dropdown data={difficulty} setDifficultyChange={setDifficultyChange} />
        <div onClick={startQuiz} className="introduce-btn">
          Start to Quiz
        </div>
      </div>
    </div>
  );
};

export default AIntroduce;
