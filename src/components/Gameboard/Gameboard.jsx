import React from "react";
import Menu from "../menu/Menu";
import Grid from "../grid/Grid";

/**
 * Gameboard component that has a menu and grid children
 * @component gameboard - has both menu and grid
 */
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
