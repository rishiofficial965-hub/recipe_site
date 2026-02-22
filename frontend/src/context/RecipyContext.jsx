import React, { useState } from "react";
import { recipecontext } from "./recipeContext.js";


const RecipyContext = (props) => {
  const [data, setdata] = useState([]);
  return (
    <recipecontext.Provider value={{ data, setdata }}>
        {props.children}
    </recipecontext.Provider>
  );
};

export default RecipyContext;
