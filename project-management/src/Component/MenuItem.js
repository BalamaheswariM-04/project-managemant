import React from "react";
import { Button } from "@mui/material";
function MenuItem({ image, name, view }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})`}}> </div>
      <h1> {name} </h1>
      <p> {view} </p>
      <Button variant="contained" href='/'>
        View
      </Button>
    </div>
  );
}

export default MenuItem;