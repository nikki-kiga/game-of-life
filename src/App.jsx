import React from 'react';
import Gameboard from './Components/Gameboard/Gameboard';
import Header from './Components/Layout/Header';

import styles from './app.css';
import Footer from './Components/Layout/Footer';

export default function App() {
  return (
    <div className={styles.app}>
      <Header/>
      <Gameboard />
      <Footer/>
    </div>
  );
}
  
