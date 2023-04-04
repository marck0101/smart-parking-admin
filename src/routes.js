import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Components/Home/Home";
import ChartBar from "./Pages/Components/ChartBar";
import ChartLine from "./Pages/Components/ChartLine";
import Header from "./Pages/Components/Header";
import Relatorios from "./Pages/Components/Relatorios";
import Erro from "./Pages/Components/Erro/Erro";
import RelatorioDia from "./Pages/Components/Relatorios/Dia";
import RelatorioSemana from "./Pages/Components/Relatorios/Dia";
import RelatorioMes from "./Pages/Components/Relatorios/Dia";
import RelatorioSemestre from "./Pages/Components/Relatorios/Dia";
import NovoRelatorio from "./Pages/Components/NewRelatorio";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chartBar" element={<ChartBar />} />
        <Route path="/chartline" element={<ChartLine />} />
        <Route path="/relatorios" element={<Relatorios />} />
        <Route path="/relatorios/:id" element={<Relatorios />} />
        <Route path="/cadastroRelatorios" element={<NovoRelatorio />} />


        <Route path="/relatorioDia" element={<RelatorioDia />} />
        <Route path="/relatorioSemana" element={<RelatorioSemana />} />
        <Route path="/relatorioMes" element={<RelatorioMes />} />
        <Route path="/relatorioSemestre" element={<RelatorioSemestre />} />

        <Route path="*" errorElement={<Erro />} />
      </Routes>
    </BrowserRouter>
  );
}
export default RoutesApp;
