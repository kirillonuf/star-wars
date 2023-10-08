import React from 'react';

import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Loading.module.css';
import Loader from './Loader';



const Loading = ({theme='dark',classes}) => {
    
  return (
    <div className={cn(styles.spinner, classes )}>
        <Loader theme={theme}/>
  </div>
  );
}

Loading.propTypes = {
    theme: PropTypes.string,
    classes: PropTypes.string,
}

export default Loading ;