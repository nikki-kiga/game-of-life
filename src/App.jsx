import React from "react";
import Gameboard from "./components/gameboard/Gameboard";
import Header from "./components/layout/Header";

import styles from "./app.css";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Gameboard />
      <Footer />
    </div>
  );
}
