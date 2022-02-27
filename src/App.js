import "./App.css";
<<<<<<< HEAD
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {" "}
      <Routes>
        {/* footer visible by link */}
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </div>
  );
=======
import NosFond from "./nosFonds/NosFond";

function App() {
  return <div className="App">
    <NosFond></NosFond>
    </div>;
>>>>>>> df26c332d13cac0d2326790d1a3f10f3b79083b0
}

export default App;
