import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import AIntroduce from "./pages/introduce/AIntroduce";


function App() {
  return (
    <div className="">
      <Router>
        <Routes>
        <Route path="/" element={<AIntroduce />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
