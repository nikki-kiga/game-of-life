import React from 'react';
import Gameboard from './components/Gameboard/Gameboard';
import Header from './components/Layout/Header';

import styles from './app.css';
import Footer from './components/Layout/Footer';

export default function App() {
  return (
    <div className={styles.app}>
      <Header/>
      <Gameboard />
      <Footer/>
    </div>
  );
}
  
