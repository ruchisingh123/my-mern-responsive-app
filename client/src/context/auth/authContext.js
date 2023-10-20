import { Grid } from "@mui/material";
import { Grid } from "@mui/material";
import { Grid } from "@mui/material";
import React, { useContext } from "react";
import React, { useContext } from "react";
import React, { useContext } from "react";
import { createContext, useContext } from 'react';
import AuthContext from "../context/auth/authContext";
import AuthContext from "../context/auth/authContext";
import AuthContext from "../context/auth/authContext";

const authContext = createContext();

export default authContext;
export const Home = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {Array.from(Array(6)).map((_, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <Item>xs=2</Item>
        </Grid>
      ))}
    </Grid>

  );
};
