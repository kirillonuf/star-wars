import React from "react";
import cn from 'classnames';
import PropTypes from "prop-types";
import icon from './img/cancel.svg';

import '../index.css';
import styles from "./Input.module.css";

const Input = ({ classes, value, placeholder, handleInputChange }) => (
  <div className={cn(styles.wrapper__input, classes)}>
    <input
      type="text"
      value={value}
      onChange={(e) => handleInputChange(e.target.value)}
      placeholder={placeholder}
      className={styles.input}
    />
    <img src={icon} 
    onClick={()=>value && handleInputChange('') }
    className={cn(styles.clear, !value && styles.clear__disabled)}
    alt="clear" />
  </div>
);

Input.propTypes = {
  classes: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  handleInputChange: PropTypes.func,
};
export default Input;
