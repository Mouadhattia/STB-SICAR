import "./App.css";
import Home from "./Pages/Home/Home";
import Contact from "./Components/Contact/Contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {" "}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />

        {/* footer visible by link */}
      </Routes>
    </div>
  );
}
export default App;
