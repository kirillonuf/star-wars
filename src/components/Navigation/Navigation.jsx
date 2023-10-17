import React, { useEffect, useState } from "react";
import { Outlet, NavLink } from "react-router-dom";

import lightIcon from "./img/light-saber.png";
import darkIcon from "./img//space-station.png";
import neitralIcon from "./img/military.png";

import './index.css'
import styles from "./Navigation.module.css";
import FavoriteLink from "@components/FavoriteLink";
import {
  useTheme,
  THEME_DARK,
  THEME_LIGHT,
  THEME_NEITRAL,
} from "../../context/ThemeProvider";

export const NavigationLink = ({classes, isBurger, setIsBurger}) => {
  return (
    <>
      <li className={classes} >
        <NavLink  className={styles.link} to="/">
          Home
        </NavLink>
      </li>
      { classes==='hide' && <li className={styles.burger__menu_btn}  onClick={()=>setIsBurger(!isBurger)} >
        <span></span>
      </li>}
      <li className={classes}>
        <NavLink className={styles.link} to="/people/?page=1">
          People
        </NavLink>
      </li>
      <li className={classes}>
        <NavLink className={styles.link} to="/search">
          Search
        </NavLink>
      </li>
      <li className={classes}>
        <NavLink className={styles.link} to="/not-found">
          Not Found
        </NavLink>
      </li>
      <li className={classes}>
        <NavLink className={styles.link} to="/fail">
          Fail
        </NavLink>
      </li>
    </>
  );
};

const Navigation = () => {
  const [logo, setLogo] = useState(darkIcon);
  const [isBurger,setIsBurger] = useState(false)
  const isTheme = useTheme();

  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_LIGHT:
        setLogo(lightIcon);
        break;

      case THEME_DARK:
        setLogo(darkIcon);
        break;

      case THEME_NEITRAL:
        setLogo(neitralIcon);
        break;

      default:
        setLogo(darkIcon);
    }
  }, [isTheme]);

useEffect(()=>{
  if(isBurger)document.body.style.overflow = "hidden";
  else document.body.style.overflow = "auto";
},[isBurger])

const handlerBurger = (e)=>{
  const elem = document.querySelector('aside');
  if(e.target!==elem) e.target.onclick = setIsBurger(!isBurger);
}

  return (
    <div className={styles.container}>
       {isBurger && (
        <div className="burger__layer" onClick={handlerBurger} >
          <aside className={styles.burger}>
            <span className={styles.close}>X</span>
            <NavigationLink />
          </aside>
        </div>
          
        )}
      <header className={styles.header}>
        <nav className={styles.nav_panel}>
          <li>
            <NavLink id={styles.logo} className={styles.link} to="/">
              <img className={styles.logo} src={logo} alt="logo" />
            </NavLink>
          </li>
          <NavigationLink classes={"hide"} isBurger={isBurger} setIsBurger={setIsBurger} />
          <li className={styles.favorites}>
            <NavLink
              id={styles.favorites}
              className={styles.link}
              to="/favorites"
            >
              <FavoriteLink />
            </NavLink>
          </li>
        </nav>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>
      
    </div>
  );
};

export default Navigation;
