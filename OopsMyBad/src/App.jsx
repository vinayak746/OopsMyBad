import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Apology from "./pages/Apology";
import ThankYou from "./pages/ThankYou";
import Rejected from "./pages/Rejected";
import Forgiveness from "./components/ForgivenessPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apology" element={<Apology />} />
      <Route path="/thankyou" element={<ThankYou />} />
      <Route path="/rejected" element={<Rejected />} />
      <Route path="/forgiveness" element={<Forgiveness />} />
    </Routes>
  );
}

export default App;
