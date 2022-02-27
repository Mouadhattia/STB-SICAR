import "./App.css";
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
}

export default App;
