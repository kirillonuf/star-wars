import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import favoritesLink from './img/favorite.png';

import styles from './FavoriteLink.module.css';
import { useSelector } from 'react-redux';

const FavoriteLink = () => {
   const storeData = useSelector((state)=>state.favoriteReducer)
  const [count, setCount] = useState(null);
   useEffect(()=>{
    const length = Object.keys(storeData).length;
    length.toString().length>2 ? setCount('...') : setCount(length)
   })
    
   return (
    <div className={styles.favoriteLink}>
        <img className={styles.favoriteLinkImg} src={favoritesLink} alt="favoriteIcon" />
       { count && <span className={styles.countFavorite}>
           {count}
        </span>}
    </div>
  );
}

export default FavoriteLink;