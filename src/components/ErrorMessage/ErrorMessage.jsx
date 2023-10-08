import React from 'react';
import styles from './ErrorMessage.module.css';
import cn from 'classnames';
import Video from '../../UI/Video';
import video from './video/black-hole.mp4';

const ErrorMessage = () => {
  return (
    < >
    <Video src={video} playbackRate={0.5} classes={styles.video} />
    <p className={cn(styles.text, styles.header_text)}>
        The dark side of the force has won. <br />
        We cannot display data.<br />
        Come back when we fix everything.
     </p>
    </>
    
  );
}
export default ErrorMessage;