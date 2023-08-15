/* eslint-disable jsx-a11y/alt-text */

import React from "react";
import { info } from "../../../info/info";
import { Card, Grid, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import "../Home/style.css";

export default function Home() {

  // const api = "http://192.168.123.196/parkingDetector/";
  // const [imagemRealTime, setImagemRealTime] = React.useState([]);

  return (
    <>
      <Grid container spacing={2} style={{padding: 15}}>
        {info.cardsHome.map((item, index) => (
          <Grid key={item.id} item xs={12} lg={6} >
            <Tooltip title={item.tooltip}>
              <Card>
                <br />
                <h3>{item.title}</h3> <br />
                <Link to={`/relatorios/${item.id}`}>
                  <Grid className="center1">
                    {item.dadosAPI ? (
                      <div>{item.dadosAPI}</div>
                    //   <img
                    //   src={`data:image/png;base64,${imagemRealTime}`}
                    //   height="400"
                    //   width="800"
                    // />
                    ) : (
                      <img
                        src={item.imagemCaminho}
                        height="250"
                        width="450"
                        alt={item.title}
                      />
                    )}
                  </Grid>
                </Link>
                <br />
              </Card>
            </Tooltip>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
