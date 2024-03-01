import { BrowserRouter, Route, Routes } from "react-router-dom";
import Configuracao from "./Pages/Configuracao/Configuracao";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Configuracao />}/>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
      
  );
}

export default App;
