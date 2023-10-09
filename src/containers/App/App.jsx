import React from "react";
import { BrowserRouter, RouterProvider, NavLink } from "react-router-dom";

import PeoplePage from "@containers/PeoplePage";
import HomePage from "@containers/HomePage";

import styles from "./App.module.css";
import { router } from "@routes/routingConfig";
import { REPO_NAME } from "../../constants/repo";


const App = () => {
  return (

          // <BrowserRouter  basename={`/${REPO_NAME}/`}> 
    <div className="App">
        <div className={styles.wrapper}>
          <RouterProvider router={router}>
          
            {/* <NavLink to="/" >Home</NavLink> */}
       </RouterProvider>
        </div>
    </div>  
    //  </BrowserRouter> 
  );
};

export default App;
