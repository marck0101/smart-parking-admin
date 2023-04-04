// import React from "react";

// export default function ChartLine() {
//   return (
//     <>
//       <h1>ChartLine</h1>
//       <p>Aqui estamos na ChartLine </p>
//     </>
//   );
// }

import { Card, Grid } from "@mui/material";
import React from "react";
// import { ChatsStyles } from "./styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  // CartesianGrid,
  // BarChart,
  // Bar,
} from "recharts";
// import { Bar } from "react-chartjs-2";

const a = "VAGA 1";
const b = "VAGA 2";
const c = "VAGA 3";
const d = "VAGA 4";
const e = "VAGA 5";
const f = "VAGA 6";
const g = "VAGA 7";

export default function ChartLine() {
  const data = [
    {
      name: `${a}`,
      uv: 4000, // linha verde uv
      pv: 2400, // linha roxa => pv
      amt: 2400, // pontos nos traços
    },
    {
      name: `${b}`,
      uv: 3000, // linha verde uv
      pv: 1398, // linha roxa => pv
      amt: 2210, // pontos nos traços
    },
    {
      name: `${c}`,
      uv: 2000, // linha verde uv
      pv: 9800, // linha roxa => pv
      amt: 2290, // pontos nos traços
    },
    {
      name: `${d}`,
      uv: 2780, // linha verde uv
      pv: 3908, // linha roxa => pv
      amt: 2000, // pontos nos traços
    },
    {
      name: `${e}`,
      uv: 1890, // linha verde uv
      pv: 4800, // linha roxa => pv
      amt: 2181, // pontos nos traços
    },
    {
      name: `${f}`,
      uv: 2390, // linha verde uv
      pv: 3800, // linha roxa => pv
      amt: 2500, // pontos nos traços
    },
    {
      name: `${g}`,
      uv: 3490, // linha verde uv
      pv: 4300, // linha roxa => pv
      amt: 2100, // pontos nos traços
    },
  ];

  return (
    // <ChatsStyles>
    <div className="chartContainer">
      <Card>
        <Grid item>
          <h1 style={{ marginTop: "20px" }}>Estacionamento 1</h1> <br />
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} lg={6} style={{ display: "flex" }}>
            <Grid item>
              <h3>Médias Segunda-feira</h3> <br />
              <LineChart
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
                <XAxis dataKey="name" padding={{ left: 0, right: 0 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#8884d8"
                  activeDot={{ r: 1 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </Grid>

            <Grid item>
              <h3>Médias Terça-feira</h3> <br />
              <LineChart width={600} height={300} data={data}>
                <XAxis dataKey="name" padding={{ left: 0, right: 0 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#8884d8"
                  activeDot={{ r: 1 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </div>
    // </ChatsStyles>
  );
}
