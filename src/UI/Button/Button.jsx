import React from "react";
import PropTypes from "prop-types";
import cn from 'classnames';

import "../index.css";
import styles from "./Button.module.css";

const Button = ({ 
  onClick, 
  name, 
  disabled = false,
  theme = 'dark',
  classes
}) => {
  return (
    <div>
      <button onClick={onClick} className={cn(styles.btn, styles[theme], classes )} disabled={disabled}>
        {name}
      </button>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  classes: PropTypes.string,
  theme: PropTypes.string,
};
export default Button;
