import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeConcurrentRequest } from "@utils/network";

import styles from "./PersonFilms.module.css";

const PersonFilms = ({ films }) => {
  const [filmsName, setFilmsName] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await makeConcurrentRequest(films);
      setFilmsName(response);
    })();
  }, []);
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list__container}>
        {filmsName.toSorted((a,b)=> a.episode_id-b.episode_id).map(({ title, episode_id }) => (
          <li className={styles.list__item} key={episode_id}>
            <span className={styles.item__episode}>Episode {episode_id}</span>
            <span className={styles.colon}> : </span>
            <span className={styles.title}>{title}</span>
          </li>
        ))}
      </ul>{" "}
    </div>
  );
};

PersonFilms.propTypes = {
  films: PropTypes.array,
};
export default PersonFilms;
