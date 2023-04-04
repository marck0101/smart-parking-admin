// import { IoBarChartSharp } from "react-icons/io5";
// import AssessmentIcon from '@mui/icons-material/Assessment';
// import { useParams } from "react-router-dom";
// import RelatorioDia from "./Dia";
import React from "react";
import { Card, Grid } from "@mui/material";
import "./style.css";
import { Link } from "react-router-dom";

export default function Relatorios() {

  return (
    <>
      <br />
      <h1>Relatódio Estacionamento {/*{id}*/}</h1>
      <br />

      <Grid container spacing={2} style={{ display: "flex" }}>
        <Grid item xs={12} sm={6} lg={6}>
          <div class="clicavel" /*onClick={CardClicavel}*/>
            <Card height={"100px"}>
              <br />
              <h1>Relatório do dia</h1> <br />
              <Grid style={{ whidth: "150px", height: "150px" }}>
                <Link to="/relatorioDia">
                  <img
                    src="./image/statistics.png"
                    alt="ICON "
                    whidth={"110px"}
                    height={"110px"}
                  />
                </Link>
              </Grid>
            </Card>
          </div>
        </Grid>

        <br />

        <Grid item xs={12} sm={6} lg={6}>
          <div class="clicavel" /*onClick={CardClicavel1}*/>
            <Card>
              <br />
              <h1>Relatório da semana</h1> <br />
              <Grid style={{ whidth: "150px", height: "150px" }}>
                <Link to="/relatorioSemana">
                  <img
                    src="./image/statistics.png"
                    alt="ICON "
                    whidth={"110px"}
                    height={"110px"}
                  />
                </Link>
              </Grid>
            </Card>
          </div>
        </Grid>

        <br />
        <Grid item xs={12} sm={6} lg={6}>
          <div class="clicavel" /*onClick={CardClicavel2}*/>
            <Card>
              <br />
              <h1>Relatório do mês</h1> <br />
              <Grid style={{ whidth: "150px", height: "150px" }}>
                <Link to="/relatorioMes">
                  <img
                    src="./image/statistics.png"
                    alt="ICON "
                    whidth={"110px"}
                    height={"110px"}
                  />
                </Link>
              </Grid>
            </Card>
          </div>
        </Grid>

        <br />

        <Grid item xs={12} sm={6} lg={6}>
          <div class="clicavel" /*onClick={CardClicavel3}*/>
            <Card>
              <br />
              <h1>Relatório do Semestre</h1> <br />
              <Grid style={{ whidth: "150px", height: "150px" }}>
                <Link to="/relatorioSemestre">
                  <img
                    src="./image/statistics.png"
                    alt="ICON "
                    whidth={"110px"}
                    height={"110px"}
                  />
                </Link>
              </Grid>
            </Card>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
