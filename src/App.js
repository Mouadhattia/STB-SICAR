import "./App.css";
import MainLayout from "./MainLayout/MainLayout";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {" "}
      <Routes>
        {/* mainlayout visible by link */}
        <Route path="/mainlayout" element={<MainLayout />} />
      </Routes>
    </div>
  );
}
export default App;
