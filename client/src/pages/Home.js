import React, {useContext} from "react";

import authContext from "../context/auth/authContext";
import { Grid } from "@mui/material";
import authContext from "../context/auth/authContext";

const Home =() =>{
    const authContext =useContext(authContext);
    const {user} = authContext;

    return(
        <Grid container={8} className="md-grid-vertical" style={{backgroundColor:"pink"}}>
        <Grid item x1={1}><img src="*/ image 53*/
        
 position: absolute;
 width: 360px;
 height: 190px;
 left: 0px;
 top: 0px;

 background: url(image.png);"></img></Grid>
      <Grid item xs={1} className="md-grid-horizontal" backgroundColor="pink">SOCIETY SPHERE</Grid>
       </Grid>
    );
};
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('Server initiated succesfully');
});