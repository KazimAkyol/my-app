import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AIntroduce from "./pages/introduce/AIntroduce";
import Quiz from "./pages/quiz/Quiz";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<AIntroduce />} />
          <Route path="/quiz/:difficulty/:amount" element={<Quiz />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
