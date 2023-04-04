import { Link } from "react-router-dom";
import "./style.css";

function Header() {
  // function CardClicavel() {
  //   // console.log("eu vou para o google");
  //   window.location = "http://localhost:3000"; // acessar menu de relatório, dia, semana mês
  // }
  return (
    <header>
      <div className="clicavel">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h2>Smart Parking</h2>
        </Link>
      </div>

      <div className="menu">
        {/* <Link to="/" style={{ textDecoration: "none" }}>
          Home
        </Link> */}
        <Link to="/cadastroRelatorios" style={{ textDecoration: "none" }}>
          Cadastro
        </Link>
        <Link to="/ChartLine" style={{ textDecoration: "none" }}>
          ChartLine
        </Link>
        {/* <Link to="/relatorios">Relatórios</Link> */}
      </div>
    </header>
  );
}

export default Header;
