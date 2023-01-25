import Navbar from "./Navbar";
import LandingPage from './Pages/LandingPage';
import CreateRiddles from './Pages/CreateRiddles';
import SolveRiddles from './Pages/SolveRiddles';
import LandingPageV2 from "./Pages/LandingPageV2";
import Footer from "./Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <div className="navbar">
          <Navbar></Navbar>
        </div>
      <div className="lp py-11 my-11">
        <Routes>
          <Route exact path="/" element={<LandingPageV2/>}>
          </Route>
          <Route path="/createRiddles" element={<CreateRiddles/>}>
          </Route>
          <Route path="/solveRiddles" element={<SolveRiddles/>}>
          </Route>
        </Routes>
      </div>
      <div>
        <Footer></Footer>
      </div>
      </div>
    </Router>
  );
}

export default App;
