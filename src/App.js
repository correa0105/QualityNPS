import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/home";
import { Nps } from "./pages/nps";
import { Logado } from "./pages/usuarioLogado";
import { Dashboard } from "./pages/dashboard";
import { Cadastros } from "./pages/cadastros";
import { Configuracao } from "./pages/configuracao";
import { Pesquisa } from "./pages/pesquisa";
import { Agradecimento } from "./pages/agradecimento";
import { Envio } from "./pages/envio";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nps" element={<Nps />} />
        <Route path="/logado" element={<Logado />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cadastros" element={<Cadastros />} />
        <Route path="/configuracao" element={<Configuracao />} />
        <Route path="/avaliar" element={<Pesquisa />} />
        <Route path="/agradecimento" element={<Agradecimento />} />
        <Route path="/pesquisa" element={<Envio />} />
      </Routes>
    </Router>
  );
}

export default App;
