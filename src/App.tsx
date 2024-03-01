import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import ConfiguracaoPage from "./Pages/Configuracao/ConfiguracaoPage";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<ConfiguracaoPage />}/>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
      
  );
}

export default App;
