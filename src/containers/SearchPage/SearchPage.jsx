import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { debounce } from 'lodash'
import { getApiResource } from "@utils/network";
import { API_SEARCH } from "@constants/api";
import { withErrorApi } from "@hoc-helpers/withErrorApi";
import { getPeopleId, getPeopleImg } from "@services/getPeopleData";
import SearchPageInfo from "@components/SearchPage/SearchPageInfo";
import styles from "./SearchPage.module.css";
import Input from "../../UI/Input";

const SearchPage = ({ setErrorApi }) => {
  const [inputSearchValue, setInputSearchValue] = useState("");
  const [people, SetPeople] = useState([]);

  const getResponse = async (param) => {
    const res = await getApiResource(API_SEARCH + param);
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
      SetPeople(peopleList);

      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  const debounceGetResponse = useCallback(debounce(value=>getResponse(value),300),[]) 

  const handleInputChange = (value) => {
   
    setInputSearchValue(value);
    debounceGetResponse(value);
  };


  useEffect(()=>{
    getResponse('');
  },[])

  return (
    <div className="">
      <h1 className="header_text">Search</h1>
      
      <Input 
        classes={styles.input__search}
        value={inputSearchValue}
        handleInputChange={handleInputChange}
        placeholder="Input characters's name" />

      <SearchPageInfo people={people} />
    </div>
  );
};

SearchPage.propTypes = {
  setErrorApi: PropTypes.func,
};
export default withErrorApi(SearchPage);
