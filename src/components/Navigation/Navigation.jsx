import React, { useEffect, useState }  from "react";
import cn from 'classnames'
import { Outlet, NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import lightIcon from './img/light-saber.png'
import darkIcon from './img//space-station.png'
import neitralIcon from './img/military.png'

import styles from "./Navigation.module.css";
import FavoriteLink from "@components/FavoriteLink";
import { useTheme, 
  THEME_DARK, 
  THEME_LIGHT, 
  THEME_NEITRAL 
} from "../../context/ThemeProvider";

const Navigation = () => {
  const [logo,setLogo] =useState(darkIcon)
  const isTheme = useTheme();

  useEffect(()=>{
    switch (isTheme.theme) {
      case THEME_LIGHT:
        setLogo(lightIcon)
        break;
      
      case THEME_DARK:
        setLogo(darkIcon)
      break;  

      case THEME_NEITRAL:
        setLogo(neitralIcon)
      break;  
    
      default:
        setLogo(darkIcon);
       
    }
  },[isTheme])
  return (
    <div className={styles.container}>
      <nav className={styles.nav_panel}>
       <li>
          <NavLink id={styles.logo} className={styles.link} to="/">
          <img className = {styles.logo} src={logo} alt="logo" />
          </NavLink>
        </li>  
        <li>
          <NavLink className={styles.link} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.link} to="/people/?page=1">
            People
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.link} to="/search">
            Search
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.link} to="/not-found">
            Not Found
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.link} to="/fail">
            Fail
          </NavLink>
        </li>
        <li className={styles.favorites}>
          <NavLink id={styles.favorites} className={styles.link} to="/favorites">
           <FavoriteLink />
          </NavLink>
          </li>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navigation;
