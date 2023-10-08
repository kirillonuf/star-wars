import React, { Suspense, lazy, useEffect, useState } from "react";
import { CircleLoader } from "react-spinners";
import {useNavigate} from "react-router-dom";
import { useParams } from "react-router";
import PropTypes from "prop-types";

import { withErrorApi } from "@hoc-helpers/withErrorApi";

import { API_PERSON } from "@constants/api";
import { getApiResource } from "@utils/network";

import Button from "@ui/Button";

import PersonDescription from "@components/PersonPage/PersonDescription";

import PersonImg from "@components/PersonPage/PersonImg";


import { themeLoader } from "@styles/styles";
import styles from "./PersonPage.module.css";
import Loading from "../../UI/Loading/Loading";
import { useSelector } from "react-redux";

const PersonFilms = lazy(()=> import("@components/PersonPage/PersonFilms"));
const PersonPage = ({ setErrorApi }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  // const storeData = useSelector(state => state.favoriteReducer)

  
  const [person, setPerson] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personFilms, setPersonFilms] = useState(null);

  
  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${API_PERSON}/${id}/`);
      if (res) {
        setPerson([
          { title: "Height", data: res.height },
          { title: "Mass", data: res.mass },
          { title: "Hair color", data: res.hair_color },
          { title: "Skin color", data: res.skin_color },
          { title: "Eye color", data: res.eye_color },
          { title: "Birth year", data: res.birth_year },
          { title: "Gender", data: res.gender },
        ]);
        setPersonName(res.name);
        res.films.length && setPersonFilms(res.films);
        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    })();
  }, []);

  return (
    person ? (
      <div className={styles.container}>
        <div className={styles.goBack}><Button onClick={() => navigate(-1)} name='Go Back' /></div>
         
        <span className={styles.star}></span>
        <span className={styles.star2}></span>
        <h1 className={styles.name}> {personName} </h1>
        <PersonImg id={id} personName={personName} />
        <div className={styles.info}>
          <h3>Person info</h3>
         {person &&  <PersonDescription person={person} />}
          {personFilms &&
          <Suspense fallback={<Loading theme={themeLoader.dark}/>}>
            <PersonFilms films={personFilms}/>
          </Suspense>

          }
        </div>
        
      </div>
    ): (
      <Loading theme={themeLoader.dark} classes='dark'/>
    )
  );
};

PersonPage.propTypes = {
  setErrorApi: PropTypes.func,
};
export default withErrorApi(PersonPage);
