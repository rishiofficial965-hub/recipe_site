import React, { useState, useEffect } from "react";
import { recipecontext } from "./recipeContext.js";

const RecipyContext = (props) => {
  const [data, setdata] = useState(() => {
    const savedData = localStorage.getItem("recipes");
    return savedData ? JSON.parse(savedData) : [];
  });

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(data));
  }, [data]);

  const deleteRecipe = (id) => {
    setdata((prev) => prev.filter((r) => r.id !== id));
  };

  const updateRecipe = (id, updatedRecipe) => {
    setdata((prev) =>
      prev.map((r) => (r.id === id ? { ...updatedRecipe, id } : r))
    );
  };

  return (
    <recipecontext.Provider value={{ data, setdata, deleteRecipe, updateRecipe }}>
      {props.children}
    </recipecontext.Provider>
  );
};

export default RecipyContext;
