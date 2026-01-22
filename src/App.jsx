import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Escolha from "./pages/Escolha";
import Texto from "./pages/Texto";
import Fones from "./pages/Fones";
import Poesia from "./pages/Poesia";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/escolha" element={<Escolha />} />
        <Route path="/texto" element={<Texto />} />
        <Route path="/fones" element={<Fones />} />
        <Route path="/poesia" element={<Poesia />} />

      </Routes>
    </BrowserRouter>
  );
}
