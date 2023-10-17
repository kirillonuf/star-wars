import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import black_hole from './video/black-hole-animation.gif'


import styles from "./Video.module.css";

const Video = ({ src, classes, playbackRate = 1.0 }) => {
  // const videoRef = useRef(null);
  // useEffect(() => {
  //   videoRef.current.playbackRate = playbackRate;
  // }, [playbackRate]);
  return (
    <div className={styles.shell}>

      <img className={styles.video} src={black_hole} alt="black-hole"  />
      {/* <video
        controls={false}
        ref={videoRef}
        loop
        autoPlay
        muted
        className={cn(styles.video, classes)}
      >
        <source src={src} type="video/mp4" />
      </video> */}

    </div>
  );
};

Video.propTypes = {
  src: PropTypes.string,
  classes: PropTypes.string,
  playbackRate: PropTypes.number,
};
export default Video;
