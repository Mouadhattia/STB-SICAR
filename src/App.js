import "./App.css";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {" "}
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact/>} />
    
        {/* footer visible by link */}
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </div>
  );





}

export default App;
