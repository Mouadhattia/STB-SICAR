import "./App.css";
import MainLayout from "./MainLayout/MainLayout";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {" "}
      <Routes>
        {/* mainlayout visible by link */}
        <Route path="/mainlayout" element={<MainLayout />} />

        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />

        {/* footer visible by link */}
      </Routes>
    </div>
  );
}
export default App;
