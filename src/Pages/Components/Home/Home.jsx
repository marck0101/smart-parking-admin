/* eslint-disable jsx-a11y/alt-text */

import React from "react";
import { info } from "../../../info/info";
import { Card, Grid, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import "../Home/style.css";

export default function Home() {
  return (
    <>
      <Grid container spacing={2}>
        {info.cardsHome.map((item, index) => (
          <Grid key={item.id} item xs={12} lg={6}>
            <Tooltip title={item.tooltip}>
              <Card>
                <br />
                <h3>{item.title}</h3> <br />
                <Link to={`/relatorios/${item.id}`}>
                  {" "}
                  {/* Alteração aqui */}
                  <Grid className="center1">
                    {item.dadosAPI ? (
                      <div>{item.dadosAPI}</div>
                    ) : (
                      <img
                        src={item.imagemCaminho}
                        height="200"
                        width="400"
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
