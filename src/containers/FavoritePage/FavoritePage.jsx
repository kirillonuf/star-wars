import React, { useEffect, useState } from "react";

import styles from "./FavoritePage.module.css";
import { useSelector } from "react-redux";
import PeopleList from "@components/PeoplePage/PeopleList";

const FavoritePage = () => {
  const [people,setPeople] = useState([])
  const storeData = useSelector((state) => state.favoriteReducer);
 
  useEffect(()=>{
    const arr  = Object.entries(storeData);

   if(arr.length){
      const res = 
      arr.map((item)=>(
        {
          'id': item[0],
          'name': item[1].personName,
          'img': item[1].personImg,
        }))    
      setPeople(res);
    }        
  },[])
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {
        people.length > 0 ? 
          <PeopleList people = {people}/>:
          <h1> FAVORITES: EMPTY LIST </h1>
        }
      </div>
    </div>
  );
};

export default FavoritePage;
