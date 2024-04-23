import Home from "./Components/Home/Home";
import Quiz from "./Components/Quiz/Quiz";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Quiz2 from "./Components/Quiz2/Quiz2";
import Quiz3 from "./Components/Quiz3/Quiz3";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/easy" element={<Quiz/>} />
        <Route path="/medium" element={<Quiz2/>} />
        <Route path="/hard" element={<Quiz3/>} />
      </Routes>


    </div>
  );
}

export default App;
