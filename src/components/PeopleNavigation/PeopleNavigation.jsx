import React from "react";

import { Link } from "react-router-dom";

import { SWAPI_ROOT } from "@constants/api";

import Button from "@ui/Button";

import styles from "./PeopleNavigation.module.css";

const PeopleNavigation = ({ previousPage, nextPage, setPeople, setCurrentUrlPeople }) => {
  return (
    <div className={styles.btnSection}>
<Link to={
  previousPage && 
  `/${previousPage.split(SWAPI_ROOT)[1]}`}>
      <Button
        disabled={!previousPage}
        theme = 'dark'
        onClick={() => {
          setPeople(null);
          setCurrentUrlPeople(previousPage);
        }}
        name="Previous"
      />
      </Link>

<Link to={
  nextPage && 
  `/${nextPage.split(SWAPI_ROOT)[1]}`}>
      <Button
        disabled={!nextPage}
        theme = 'dark'
         onClick={() => {
          setPeople(null);
          setCurrentUrlPeople(nextPage);
        }}
        name="Next"
        // classes = {styles.test}
      />
      </Link>

    </div>
  );
};


export default PeopleNavigation;
