import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";


const App = () => {
  return (
   <div className="App">
    <div>
      <div className="white-gradient" />
    
    
     <Router>
      <Navbar />
      <Routes>
      <Route path ="/login" element={<Login />} />
      </Routes>
    </Router>
    <Hero />
     <Home />
    </div>
   </div>
  );
}

export default App
