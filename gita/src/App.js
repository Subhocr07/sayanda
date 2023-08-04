import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import ReadGita from "./components/ReadGita/ReadGita";
import About from "./components/About";
import Question from "./components/Question";
import YouTubeVideo from "./components/YoutubePlayer";
import Verse from "./components/ReadGita/Verse";
import Meaning from "./components/ReadGita/Meaning";
import QtoModel from "./components/QtoModel";
import QuestionR from "./components/Redux/questionR";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/readgita" element={<ReadGita />} />
        <Route exact path="/ask" element={<Question />} />
        <Route exact path="/model" element={<QtoModel />} />
        <Route exact path="/video" element={<YouTubeVideo />} />
        <Route exact path="/chapter/:chapterId" element={<Verse />} />
        <Route
          exact
          path="/chapter/:chapterId/verses/:verseId"
          element={<Meaning />}
        />
        <Route exact path="/redux" element={<QuestionR />} />
      </Routes>
    </div>
  );
}

export default App;
