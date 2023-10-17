import React, { useEffect,  useState } from "react";
import { CircleLoader } from "react-spinners";
import PropTypes from "prop-types";

import { useQueryParams } from "@hooks/useQueryParams"
import { withErrorApi } from "@hoc-helpers/withErrorApi";

import { API_PEOPLE } from "@constants/api";
import { getApiResource } from "@utils/network";
import { getCounterPage, getPeopleId, getPeopleImg } from "@services/getPeopleData";


import PeopleList from "@components/PeoplePage/PeopleList";

import styles from "./PeoplePage.module.css";
import PeopleNavigation from "../../components/PeopleNavigation/PeopleNavigation";
import Loading from "../../UI/Loading/Loading";
import { themeLoader } from "@styles/styles";

const PeoplePage =({ setErrorApi }) => {
  const [people, setPeople] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [previousPage, setPreviousPage] = useState(null);
  const [counterPage, setCounterPage] = useState(1);
  const query = useQueryParams();
  const queryPage = query.get('page');
  const [currentUrlPeople, setCurrentUrlPeople] = useState(API_PEOPLE+queryPage);

  const getResource = async (url) => {
    const res = await getApiResource(url);
    if (res) {     
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImg(id);
        return {
          id,
          name,
          img,
        };
      });
      setPreviousPage(res.previous);
      setNextPage(res.next);
      setPeople(peopleList);
      setCounterPage(getCounterPage(url));
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    
    getResource(currentUrlPeople);
    window.scrollTo(0, 0)
  }, [currentUrlPeople]);
  return (
    <>
      {people ? (
        <>
          <PeopleList people={people} />
          <PeopleNavigation 
            previousPage={previousPage}
            nextPage={nextPage}
            setPeople={setPeople}
            setCurrentUrlPeople={setCurrentUrlPeople} />
        </>
      ) : (
        <Loading theme={themeLoader.dark}/>
      )}
      
    </>
  );
};

PeoplePage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PeoplePage);
