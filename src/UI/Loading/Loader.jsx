import React from 'react';

import { CircleLoader } from "react-spinners";
import PropTypes from 'prop-types';


const Loader = ({theme}) => {
  return (
   <>
    <CircleLoader color={theme} size={150} />
   </>
  );
}

 Loader.propTypes = {
    theme: PropTypes.string,
}
export default Loader;