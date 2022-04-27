import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Teams from "./pages/teams/Teams";
import PointsTable from "./pages/pointsTable/PointsTable";
import Statistics from "./pages/statistics/Statistics";
import Matches from "./pages/matches/Matches";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="pageContainer">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/matches" element={<Matches />} />
            <Route path="/points-table" element={<PointsTable />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
