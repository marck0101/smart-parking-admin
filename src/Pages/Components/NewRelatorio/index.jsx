import { Card, Grid } from "@mui/material";
import React from "react";
import "./style.css";
// import { GoFileCode } from "react-icons/go";
import { HiCode } from "react-icons/hi";

export default function NovoRelatorio() {
  return (
    <>
      <Grid style={{ padding: 15 }}>
        <h1>Novo Relatório</h1>
      </Grid>
      <Grid container>
        <Grid item style={{ padding: 20, width: "100%", height: "100%" }}>
          <Card style={{ height: "100%" }}>
            <Grid style={{ padding: 15 }}>
              <h1>Em Desenvolvimento</h1>
            </Grid>
              {/* <GoFileCode size={50}/> */}
              <HiCode size={50}/>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
