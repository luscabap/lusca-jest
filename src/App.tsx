import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import ConfiguracaoPage from "./Pages/Configuracao/ConfiguracaoPage";
import SorteioPage from "./Pages/Sorteio/SorteioPage";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<ConfiguracaoPage />} />
          <Route path="/sorteio" element={<SorteioPage />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
      
  );
}

export default App;
