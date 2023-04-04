import { Card, Grid } from "@mui/material";
import React from "react";
import Data from "./data2";
// import { ChatsStyles } from "./styles";
import {
  // LineChart,
  // Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";
// import { Bar } from "react-chartjs-2";

const a = "VAGA 1";
const b = "VAGA 2";
const c = "VAGA 3";
const d = "VAGA 4";
const e = "VAGA 5";
const f = "VAGA 6";
const g = "VAGA 7";

const ay = 0;
const by = 11;
const cy = 15;
const dy = 20;
const ey = 25;
const fy = 30;
const gy = 35;

// grafico 2
const ay1 = 0;
const by1 = 2;
const cy1 = 4;
const dy1 = 6;
const ey1 = 8;
const fy1 = 10;
const gy1 = 12;

export default function RelatorioSemana() {
  const data = [
    {
      name: `${a}`,
      eixoY: `${ay}`,
      // uv: 4000,
      pv: 35,
      amt: 2400,
    },
    {
      name: `${b}`,
      eixoY: `${by}`,
      // uv: 3000,
      pv: 10,
      amt: 2210,
    },
    {
      name: `${c}`,
      eixoY: `${cy}`,
      // uv: 2000,
      pv: 15,
      amt: 2290,
    },
    {
      name: `${d}`,
      eixoY: `${dy}`,
      // uv: 2780,
      pv: 5,
      amt: 2000,
    },
    {
      name: `${e}`,
      eixoY: `${ey}`,
      // uv: 1890,
      pv: 20,
      amt: 2181,
    },
    {
      name: `${f}`,
      eixoY: `${fy}`,
      // uv: 2390,
      pv: 10,
      amt: 2500,
    },
    {
      name: `${g}`,
      eixoY: `${gy}`,
      // uv: 3490,
      pv: 18,
      amt: 2100,
    },
  ];

  const data1 = [
    {
      name: `${a}`,
      eixoY: `${ay1}`,
      // uv: 4000,
      pv: 23,
      amt: 2400,
    },
    {
      name: `${b}`,
      eixoY: `${by1}`,
      // uv: 3000,
      pv: 12,
      amt: 2210,
    },
    {
      name: `${c}`,
      eixoY: `${cy1}`,
      // uv: 2000,
      pv: 24,
      amt: 2290,
    },
    {
      name: `${d}`,
      eixoY: `${dy1}`,
      // uv: 2780,
      pv: 15,
      amt: 2000,
    },
    {
      name: `${e}`,
      eixoY: `${ey1}`,
      // uv: 1890,
      pv: 17,
      amt: 2181,
    },
    {
      name: `${f}`,
      eixoY: `${fy1}`,
      // uv: 2390,
      pv: 18,
      amt: 2500,
    },
    {
      name: `${g}`,
      eixoY: `${gy1}`,
      // uv: 3490,
      pv: 5,
      amt: 2100,
    },
  ];

  return (
    // <ChatsStyles>
    <div className="chartContainer">
      <Grid container spacing={2}>
        <Grid item xs={12} lg={12}>
          <Grid item>
            <h1 style={{ marginTop: "20px" }}>Estacionamento 1</h1> <br />
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12} lg={6} style={{ display: "flex" }}>
              <Grid item>
                <Card>
                  <h3>Médias Segunda-feira</h3> <br />
                  <BarChart
                    width={600}
                    height={300}
                    data={data}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />{" "}
                    {/*mostra linhas verticais e horizontais*/}
                    <Tooltip />
                    <Legend />
                    <XAxis dataKey="name" padding={{ left: 0, right: 0 }} />
                    <YAxis dataKey="eixoY" />
                    <Bar type="monotone" dataKey="pv" fill="#8884d8" />
                    {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
                  </BarChart>
                </Card>
              </Grid>
            </Grid>

            <Grid item xs={12} lg={6} style={{ display: "flex" }}>
              <Grid item>
                <Card>
                  <h3>Médias Terça-feira</h3> <br />
                  <BarChart
                    width={600}
                    height={300}
                    data={data1}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" />
                  </BarChart>
                </Card>
              </Grid>
            </Grid>

            <Grid item xs={12} lg={6} style={{ display: "flex" }}>
              <Card>
                <Grid item>
                  <h3>Médias Quarta-feira</h3> <br />
                  <BarChart
                    width={600}
                    height={300}
                    data={data}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />{" "}
                    {/*mostra linhas verticais e horizontais*/}
                    <Tooltip />
                    <Legend />
                    <XAxis dataKey="name" padding={{ left: 0, right: 0 }} />
                    <YAxis dataKey="eixoY" />
                    <Bar type="monotone" dataKey="pv" fill="#8884d8" />
                    {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
                  </BarChart>
                </Grid>
              </Card>
            </Grid>

            <Grid item xs={12} lg={6} style={{ display: "flex" }}>
              <Card>
                <Grid item>
                  <h3>Médias Quinta-feira</h3> <br />
                  <BarChart
                    width={600}
                    height={300}
                    data={data1}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" />
                  </BarChart>
                </Grid>
              </Card>
            </Grid>

            <Grid item xs={12} lg={6} style={{ display: "flex" }}>
              <Card>
                <Grid item>
                  <h3>Médias Sexta-feira</h3> <br />
                  <BarChart
                    width={600}
                    height={300}
                    data={data}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />{" "}
                    {/*mostra linhas verticais e horizontais*/}
                    <Tooltip />
                    <Legend />
                    <XAxis dataKey="name" padding={{ left: 0, right: 0 }} />
                    <YAxis dataKey="eixoY" />
                    <Bar type="monotone" dataKey="pv" fill="#8884d8" />
                    {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
                  </BarChart>
                </Grid>
              </Card>
            </Grid>

            <Grid item xs={12} lg={6} style={{ display: "flex" }}>
              <Card>
                <Grid item>
                  <h3>Médias Sábado</h3> <br />
                  <BarChart
                    width={600}
                    height={300}
                    data={data1}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" />
                  </BarChart>
                </Grid>
              </Card>
            </Grid>

            <Grid item xs={12} lg={6} style={{ display: "flex" }}>
              <Card>
                <Grid item>
                  <h3>Médias Domingo</h3> <br />
                  <BarChart
                    width={600}
                    height={300}
                    data={data}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />{" "}
                    {/*mostra linhas verticais e horizontais*/}
                    <Tooltip />
                    <Legend />
                    <XAxis dataKey="name" padding={{ left: 0, right: 0 }} />
                    <YAxis dataKey="eixoY" />
                    <Bar type="monotone" dataKey="pv" fill="#8884d8" />
                    {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
                  </BarChart>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
    // </ChatsStyles>
  );
}
