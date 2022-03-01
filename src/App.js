import "./App.css";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Responsabilte from "./Pages/Responsabilte/Responsabilte";
import NosFond from "./Pages/nosFonds/NosFond";
import { Route, Routes } from "react-router-dom";
import NosRealisations from "./Pages/NosRealisations/NosRealisations";
import Actualites from "./Pages/Actualites/Actualites";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/responsabilite" element={<Responsabilte />} />
        <Route path="/realisations" element={<NosRealisations />} />
        <Route path="/actualites" element={<Actualites />} />
        <Route path="/nos-fonds" element={<NosFond />} />
      </Routes>
    </div>
  );
}
export default App;
