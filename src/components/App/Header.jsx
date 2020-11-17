import React from 'react';

import styles from './header.css';

function Header() {
  return (
    <div>
      <h1 className={styles['main-title']}>
        Game of Life
      </h1>
    </div>
  );
}

export default Header;
