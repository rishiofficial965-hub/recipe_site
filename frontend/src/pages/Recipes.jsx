import React, { useContext } from "react";
import { recipecontext } from "../context/recipeContext.js";

const Recipes = () => {
  const { data } = useContext(recipecontext);

  const renderRecipes =
    data.length > 0 ? (
      data.map((recipe, idx) => (
        <div
          key={idx}
          className="
            w-[30%] flex flex-col gap-2 p-6 rounded-3xl
            bg-white/10
            backdrop-blur-xl
            border border-white/20
            shadow-2xl overflow-hidden
          "
        >
          {/* Image */}
          <div className="w-full h-96">
            <img
              className="rounded-xl w-full h-full object-cover"
              src={recipe.imgUrl}
              alt={recipe.title}
            />
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-white">{recipe.title}</h1>

          {/* Ingredients */}
          <p className="text-lg font-semibold text-gray-300">
            {recipe.ingredients}
          </p>

          {/* Instruction */}
          <p className="text-lg font-semibold text-gray-300">
            {recipe.instruction}
          </p>

          {/* Description */}
          <p className="text-lg font-semibold text-gray-300">
            {recipe.description}
          </p>
        </div>
      ))
    ) : (
      <h1>No Recipes Found...</h1>
    );

  return (
    <div className="w-full mt-2 p-6 flex flex-wrap justify-around gap-4 overflow-hidden">
      {renderRecipes}
    </div>
  );
};

export default Recipes;