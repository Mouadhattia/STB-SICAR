import "./App.css";
<<<<<<< HEAD
import Home from "./Pages/Home/Home";
=======
<<<<<<< HEAD
// <<<<<<< HEAD
import Footer from "./Components/Footer/Footer";
=======
import MainLayout from "./MainLayout/MainLayout";
import Home from "./Components/Home/Home";
>>>>>>> d8a82b05339bc9d2de61f1f57c8470548527baf4
import Contact from "./Components/Contact/Contact";
>>>>>>> e54c0088ebe76bf65204de3b78aa11404c3aeef2
import { Route, Routes } from "react-router-dom";
// import RespSocial from "./ResponsabiliteSocial/RespSocial";

function App() {
  return (
    <div className="App">
      {/* <RespSocial /> */}
      {" "}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />

        {/* footer visible by link */}
      </Routes>
    </div>
  );
<<<<<<< HEAD
// =======
// import NosFond from "./nosFonds/NosFond";

// function App() {
//   return <div className="App">
//     <NosFond></NosFond>
//     </div>;
// >>>>>>> df26c332d13cac0d2326790d1a3f10f3b79083b0
=======
>>>>>>> e54c0088ebe76bf65204de3b78aa11404c3aeef2
}
export default App;
