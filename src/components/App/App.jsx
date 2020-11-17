import React from 'react';
import Gameboard from '../Gameboard/Gameboard';
import Header from './Header';

import styles from './app.css';
import Footer from './Footer';

export default function App() {
  return (
    <div className={styles.app}>
      <Header/>
      <Gameboard />
      <Footer/>
    </div>
  );
}
  
