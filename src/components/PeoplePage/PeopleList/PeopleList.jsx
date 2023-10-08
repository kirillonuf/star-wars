import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import styles from "./PeopleList.module.css";
import { SWAPI_PEOPLE } from "@constants/api";

const PeopleList = ({ people }) => {
  return (
    <ul className={styles.list__container}>
      {people.map(({ id, name, img }) => {
        return (
          <li className={styles.list__item} key={id}>
            <Link to={`/${SWAPI_PEOPLE}/${id}`}>
              <h2>{name}</h2>
              <img className={styles.person_photo} src={img} alt={name} />
            </Link>
          </li>
        );
      })}
    </ul>
    
  );
};
PeopleList.propTypes = {
  people: PropTypes.array,
};
export default PeopleList;
