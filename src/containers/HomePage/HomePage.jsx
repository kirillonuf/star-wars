import React from 'react';
import { Outlet } from "react-router-dom";

import styles from './HomePage.module.css';
import ChooseSide from '@components/HomePage/ChooseSide';

const HomePage = () => {
  return (
    <div className={styles.theme}>
      <ChooseSide />
      <Outlet />
     </div>
  );
}

export default HomePage;