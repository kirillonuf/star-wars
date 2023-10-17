import {useNavigate} from "react-router-dom";

import img from './img/yoda.png';
import Button from "@ui/Button";

import styles from './NotFoundPage.module.css';

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className={styles.error_page}>
       <h1>Oops!</h1>
      <div className={styles.picture}>
        <div className={styles.planet}></div>
        <img className={styles.yoda} src={img} alt="404 Not Found" />
      </div>
     
      <p>Sorry, an unexpected error has occurred.</p>
      <Button onClick={() => navigate(-1)} name='Go Back' />
      
    </div>
  );
}