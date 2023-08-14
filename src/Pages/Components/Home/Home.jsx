/* eslint-disable jsx-a11y/alt-text */

// import React from "react";
// import { info } from "../../../info/info";
// import { Card, Grid, Link as MuiLink, Tooltip } from "@mui/material";
// import "../Home/style.css";

// export default function Home() {
//   return (
//     <>
//       <Grid container spacing={2}>
//         {info.cardsHome.map((item, index) => (
//           <Grid key={item.id} item xs={12} lg={6}>
//             <Card>
//               <br />
//               <h3>{item.title}</h3> <br />
//               <MuiLink to={`/relatorios/${item.id}`}>
//                 <Grid className="center1">
//                   <Tooltip title={item.tooltip}>
//                     <img
//                     //   src={item.dadosAPI ? item.imagemCaminho}
//                       src={item.imagemCaminho}
//                       height="200"
//                       width="400"
//                       alt={item.title}
//                     />
//                   </Tooltip>
//                 </Grid>
//               </MuiLink>
//               <br />
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </>
//   );
// }

import React from "react";
import { info } from "../../../info/info";
import { Card, Grid, Link as MuiLink, Tooltip } from "@mui/material";
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
                <MuiLink to={`/relatorios/${item.id}`}>
                  <Grid className="center1">
                    {item.dadosAPI ? (
                      // Display data from item.dadosAPI if available
                      <div>{item.dadosAPI}</div>
                    ) : (
                      // Display image if item.dadosAPI is not available
                      <img
                        src={item.imagemCaminho}
                        height="200"
                        width="400"
                        alt={item.title}
                      />
                    )}
                  </Grid>
                </MuiLink>
                <br />
              </Card>
            </Tooltip>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

