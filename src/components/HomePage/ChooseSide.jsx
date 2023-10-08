import React from "react";
import PropTypes from "prop-types";

import {
  useTheme,
  THEME_LIGHT,
  THEME_DARK,
  THEME_NEITRAL,
} from "@context/ThemeProvider";

import imgDarkSide from "./img/darkSide.jpg";
import imgLightSide from "./img/ligthSide.jpg";
import imgNeitralSide from "./img/neitralSide.jpg";

import styles from "./ChooseSide.module.css";

const ChooseSideItem = ({ img, text, theme }) => {
  const isTheme = useTheme();
  return (
  
    <div
      className={styles.item}
      onClick={() => {
        isTheme.change(theme);
      }}
    >
      <div className={styles.item__layer}> </div>
      <div className={styles.item__header}>{text}</div>
      <img className={styles.item__img} src={img} alt={text} />
    </div>
  );
};

ChooseSideItem.propTypes = {
  img: PropTypes.string,
  text: PropTypes.string,
  theme: PropTypes.string,
};

const ChooseSide = () => {
  const elements = [
    {
      theme: THEME_DARK,
      img: imgDarkSide,
      text: "THEME DARK",
    },
    {
      theme: THEME_LIGHT,
      img: imgLightSide,
      text: "THEME LIGHT",
    },
    {
      theme: THEME_NEITRAL,
      img: imgNeitralSide,
      text: "THEME NEITRAL",
    },
  ];
  return (
    <div className={styles.wrapper}>
      <h1 className="header_text">Choose Side</h1>
      <div className={styles.container}>
        {elements.map((item, index) => (
          <ChooseSideItem
            key={index}
            theme={item.theme}
            img={item.img}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
};
export default ChooseSide;
