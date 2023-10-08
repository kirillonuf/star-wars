import { HTTPS, SWAPI_ROOT, SWAPI_PEOPLE,
     GUIDE_IMG_EXTENSION, URL_IMG_PERSON, SWAPI_PARAM_PAGE }
 from "@constants/api"

const getId = (url,category)=>{
const id = url
    .replace(HTTPS+SWAPI_ROOT+category, '')
    .replace(/\//g,'');
 return id;
}

export const getCounterPage = url =>  Number(url.split(SWAPI_PARAM_PAGE)[1]);
export const getPeopleId = url => getId(url, SWAPI_PEOPLE);

export const getPeopleImg = id => `${URL_IMG_PERSON}/${id+GUIDE_IMG_EXTENSION}` 
