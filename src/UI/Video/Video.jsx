import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import styles from "./Video.module.css";

const Video = ({ src, classes, playbackRate = 1.0 }) => {
  const videoRef = useRef(null);
  useEffect(() => {
    videoRef.current.playbackRate = playbackRate;
  }, [playbackRate]);
  return (
    <div className={styles.shell}>
      <video
      width="240" height="240"
        controls={false}
        ref={videoRef}
        loop
        autoPlay
        playsinline
        muted
        className={cn(styles.video, classes)}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

Video.propTypes = {
  src: PropTypes.string,
  classes: PropTypes.string,
  playbackRate: PropTypes.number,
};
export default Video;
