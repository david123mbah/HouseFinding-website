import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Projects from "./pages/Projects";


const App = () => {
  return (
   <div className="App">
    <div>
      <div className="white-gradient" />
     <Router>
      <Navbar />
      <Routes>
      <Route path ="/login" element={<Login />} />
      <Route path ="/Navbar" element={<Navbar />} />
      </Routes>
    </Router>
    <Hero />
     <Projects />
    </div>
   </div>
  );
}

export default App
