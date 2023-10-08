import React from "react";
import PropTypes from "prop-types";

import { getPeopleImg } from "@services/getPeopleData";
import cn from "classnames";

import iconFavoriteAdd from "./img/add.png";
import iconFavoriteRemove from "./img/remove.png";

import styles from "./PersonImg.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setPersonToFavorite, removePersonFromFavorite } from "@store/actions";

const PersonImg = ({ id, personName }) => {
  const storeData = useSelector((state) => state.favoriteReducer);

  const dispatch = useDispatch();
  const img = getPeopleImg(id);

  const dispatchFavoritePerson = () => {
    if (storeData[id]) {
      dispatch(removePersonFromFavorite(id));
    } else {
      dispatch(
        setPersonToFavorite({
          [id]: {
            personName: personName,
            personImg: img,
          },
        })
      );
    }
  };

  return (
    <div className={styles.photo}>
      <img className={styles.personImg} src={img} alt={personName} />

      <img
        className={styles.favoriteIcon}
        onClick={dispatchFavoritePerson}
        src={storeData[id] ? iconFavoriteRemove : iconFavoriteAdd}
        alt="star"
      />
    </div>
  );
};

PersonImg.propTypes = {
  id: PropTypes.string,
  personName: PropTypes.string,
};
export default PersonImg;
