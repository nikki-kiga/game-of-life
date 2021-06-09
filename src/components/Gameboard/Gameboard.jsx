import React from "react";
import Menu from "../menu/Menu";
import Grid from "../grid/Grid";

const Gameboard = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Menu />
      <Grid />
    </div>
  );
};

export default Gameboard;
