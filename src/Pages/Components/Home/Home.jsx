/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import { Card, Grid, Tooltip } from "@mui/material";
import React from "react";
import "../Home/style.css";
// import axios from "axios"; // AXIOS É A INTEGRAÇÃO DO REACT COM QUALQUER API DISPONÍVEL
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

export default function Home() {
  // function CardClicavel() {
  //   // console.log("eu vou para o google");
  //   // window.location = "http://localhost:3000/relatorios"; // acessar menu de relatório, dia, semana mês
  //   <Link to="/relatorios" />;
  //   // <Link to="/relatorios" />;
  // }

  //Nic

  //  const api = 'http://192.168.2.102/parkingDetector/';
  const api = "http://192.168.123.196/parkingDetector/";
  const [lista, setLista] = React.useState([]);
  const [imagemRealTime, setImagemRealTime] = React.useState([]);
  const [seconds, setSeconds] = React.useState(0);

  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     listarDados();
  //   }, 2000);
  // }, []);

  // async function listarDados() {
  //   const res = await axios.get(api + "captureImage.php");
  //   console.log(res.data.result[0]);
  //   setImagemRealTime(res.data.result[0].image);
  //   //setImagemRealTime(btoa(String.fromCharCode(...new Uint8Array(res.data.result[0].image))));
  //   console.log(imagemRealTime);
  //   setLista(res.data.result);
  // }

  return (
    <div class="body">
      <Grid container>
        <Grid item xs={12} lg={12}>
          <br />
          <h1 class="titleTest">Estacionamentos</h1>
        </Grid>
      </Grid>

      <br />

      <Grid container spacing={2}>
        <Grid item xs={12} lg={12}>
          <Tooltip title="Clique para acessar relatório do estacionamento 1">
            <Card>
              <br />
              <h3>Apresentação PPI</h3> <br />
              <Grid class="center1">
                <Link to="/dashboard">
                  <img
                    src={`data:image/png;base64,${imagemRealTime}`}
                    height="400"
                    width="800"
                    // onClick={CardClicavel}
                  />
                </Link>
              </Grid>
              <br />
            </Card>
          </Tooltip>
        </Grid>

        <Grid item xs={12} lg={6}>
          <Tooltip title="Clique para acessar relatório do estacionamento 1">
            <Card>
              <br />
              <h3>Estacionamento 1</h3> <br />
              <Link to="/relatorios">
                <Grid class="center1">
                  <img
                    src="./image/estacionamento.jpg"
                    height="200"
                    width="400"
                    // onClick={CardClicavel}
                  />
                </Grid>
              </Link>
              <br />
            </Card>
          </Tooltip>
        </Grid>

        <Grid item xs={12} lg={6}>
          <Tooltip title="Clique para acessar relatório do estacionamento 2">
            <Card>
              <br />
              <h3>Estacionamento 2</h3> <br />
              <Link to="/relatorios">
                <Grid class="center1">
                  <img
                    src="./image/estacionamento1.jpg"
                    height="200"
                    width="400"
                    // onClick={CardClicavel}
                  />
                </Grid>
              </Link>
              <br />
            </Card>
          </Tooltip>
        </Grid>

        <Grid item xs={12} lg={6}>
          <Tooltip title="Clique para acessar relatório do estacionamento3">
            <Card>
              <br />
              <h3>Estacionamento 3</h3> <br />
              <Link to="/relatorios">
                <Grid class="center1">
                  <img
                    src="./image/estacionamento2.jpg"
                    height="200"
                    width="400"
                    // onClick={CardClicavel}
                  />
                </Grid>
              </Link>
              <br />
            </Card>
          </Tooltip>
        </Grid>

        <Grid item xs={12} lg={6}>
          <Tooltip title="Clique para acessar relatório do estacionamento4">
            <Card>
              <br />
              <h3>Estacionamento 4</h3> <br />
              <Link to="/relatorios">
                <Grid class="center1">
                  <img
                    src="./image/estacionamento4.jpg"
                    height="200"
                    width="400"
                    // onClick={CardClicavel}
                  />
                </Grid>
              </Link>
              <br />
            </Card>
          </Tooltip>
        </Grid>

        {/* <Grid item xs={12} lg={6}>
          <Tooltip title="Clique para acessar relatório do estacionamento 5">
            <Card>
              <br />
              <h3>Estacionamento 5</h3> <br />
              <Grid class="center1">
                <img
                  src="./image/estacionamento1.jpg"
                  height="200"
                  width="400"
                  onClick={CardClicavel}
                />
              </Grid>
            </Card>
          </Tooltip>
        </Grid>

        <Grid item xs={12} lg={6}>
          <Tooltip title="Clique para acessar relatório do estacionamento 6">
            <Card>
              <br />
              <h3>Estacionamento 6</h3> <br />
              <Grid class="center1">
                <img
                  src="./image/estacionamento.jpg"
                  height="200"
                  width="400"
                  onClick={CardClicavel}
                />
              </Grid>
            </Card>
          </Tooltip>
        </Grid> */}

        <Grid item xs={12} lg={12}>
          <Tooltip title="Clique para acessar câmera em tempo real">
            <Card>
              <br />
              <h3>Câmera em tempo real</h3> <br />
              <Grid class="center1">
                {/* <img
                  src="./image/estacionamento.jpg"
                  height="200"
                  width="400"
                  onClick={CardClicavel}
                /> */}
                {/* <iframe src="https://www.youtube.com/watch?v=U7HRKjlXK-Y"></iframe> */}
                <iframe
                  width="1310"
                  height="480"
                  src="https://www.youtube.com/embed/U7HRKjlXK-Y"
                  title="BLK-HDPTZ12 Security Camera Parkng Lot Surveillance Video"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <br />
              </Grid>
              <br />
            </Card>
          </Tooltip>
        </Grid>
      </Grid>
    </div>
  );
}
// ./../../public/image/estacionamento.jpg
