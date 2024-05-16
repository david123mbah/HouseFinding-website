
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";


const App = () => {
  return (
   <div className="App">
    <div>
      <div className="white-gradient" />
    <Navbar/>
    <Hero />
     <Home />
    </div>
   </div>
  );
}

export default App
