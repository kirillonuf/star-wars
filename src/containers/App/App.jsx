import React from "react";
import { BrowserRouter, RouterProvider, NavLink } from "react-router-dom";

import PeoplePage from "@containers/PeoplePage";
import HomePage from "@containers/HomePage";

import styles from "./App.module.css";
import { router } from "@routes/routingConfig";



const App = () => {
  return (

    <div className="App">
        <div className={styles.wrapper}>
          <RouterProvider router={router}>
            {/* <NavLink to="/" >Home</NavLink> */}
          </RouterProvider>
        </div>
    </div>
  );
};

export default App;
