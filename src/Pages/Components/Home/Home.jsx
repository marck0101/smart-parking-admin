// /* eslint-disable jsx-a11y/alt-text */
// /* eslint-disable no-unused-vars */
// import React from "react";
// import { info } from "../../../info/info";
// import { Card, Grid, Link, Tooltip } from "@mui/material";

// import "../Home/style.css";

// export default function Home() {
//     return (
//         <>

//             <Grid container spacing={2}>
//                 {info.cardsHome.map((item, index) => (
//                     <Grid key={item} item xs={12} lg={6}>
//                         <Tooltip title={item.tooltip}>
//                             <Card>
//                                 <br />
//                                 <h3>{item.title}</h3> <br />
//                                 <Link to="/relatorios:id">
//                                     <Grid class="center1">
//                                         <img
//                                             src={item.imagemCaminho}
//                                             height="200"
//                                             width="400"
//                                         />
//                                     </Grid>
//                                 </Link>
//                                 <br />
//                             </Card>
//                         </Tooltip>
//                     </Grid>
//                 ))}
//             </Grid>
//         </>
//     );
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
                                        <img
                                            src={item.imagemCaminho}
                                            height="200"
                                            width="400"
                                            alt={item.title}
                                        />
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
