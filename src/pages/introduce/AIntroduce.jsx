import React, { useState } from "react";
import "./AIntroduce.css";
import Dropdown from "../../components/dropdown/Dropdown";

const AIntroduce = () => {
  const difficulty = ["easy", "medium", "hard"];
  const [difficultyChange, setDifficultyChange] = useState("");
  return (
    <div className="introduce">
      <div className="introduce-container">
        <img
          src="https://img.freepik.com/vektoren-premium/quiz-logo-mit-sprechblasen-symbol_149152-813.jpg"
          alt=""
        />
        <Dropdown data={difficulty} setDifficultyChange={setDifficultyChange} />
        <div className="introduce-btn">Start to Quiz</div>
      </div>
    </div>
  );
};

export default AIntroduce;
