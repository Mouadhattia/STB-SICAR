import "./App.css";
import Home from "./Pages/Home/Home";
import Contact from "./Components/Contact/Contact";
import { Route, Routes } from "react-router-dom";
// import NosFond from "./nosFonds/NosFond";
// import RespSocial from "./ResponsabiliteSocial/RespSocial";

function App() {
  return (
    <div className="App">
      {/* <RespSocial /> */}{" "}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />

        {/* footer visible by link */}
      </Routes>
    </div>
  );
}
export default App;
