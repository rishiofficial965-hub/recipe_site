import React, { useContext, useEffect } from "react";
import { recipecontext } from "../context/recipeContext.js";
import { Link } from "react-router-dom";

const Recipes = () => {
  const { data, setdata, deleteRecipe } = useContext(recipecontext);

  async function fetchData() {
    await fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setdata(data.recipes);
      })
      .catch((err) => console.error(err));
  }
  useEffect(() => {
    if (data.length === 0) {
      fetchData();
    }
  }, []);

  const renderRecipes =
    data.length > 0 ? (
      data.map((recipe, idx) => (
        <div
          key={recipe.id || idx}
          className="
            relative w-full sm:w-[48%] lg:w-[31%] flex flex-col gap-4 p-5 rounded-[2.5rem]
            bg-white/5 backdrop-blur-2xl
            border border-white/10
            shadow-2xl overflow-hidden
            hover:border-yellow-400/30 transition-all duration-500 group
          "
        >
          <div className="absolute top-6 right-6 z-10">
            <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
              {recipe.mealType || "Recipe"}
            </span>
          </div>

          <Link to={`/details/${recipe.id}`} className="w-full h-80 overflow-hidden rounded-[1.8rem] block">
            <img
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              src={recipe.image}
              alt={recipe.name || recipe.title}
            />
          </Link>

          <div className="flex flex-col gap-3 px-2">
            <Link to={`/details/${recipe.id}`}>
              <h1 className="text-3xl font-black text-white leading-tight tracking-tighter hover:text-yellow-400 transition-colors">
                {recipe.name}
              </h1>
            </Link>

            <div className="flex flex-wrap gap-2">
              {recipe.ingredients.slice(0, 3).map((s, i) => (
                <span
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs font-medium text-gray-400"
                >
                  {s}
                </span>
              ))}
              {recipe.ingredients.length > 3 && (
                <span className="text-xs text-gray-500 flex items-center ml-1">
                  +{recipe.ingredients.length - 3} more
                </span>
              )}
            </div>

            <div className="flex items-center gap-3 mt-4">
              <Link
                to={`/update/${recipe.id}`}
                className="flex-1 text-center py-3 bg-white text-black font-bold rounded-2xl hover:bg-yellow-400 transition-colors duration-300 active:scale-95"
              >
                Edit
              </Link>
              <button
                onClick={() => deleteRecipe(recipe.id)}
                className="flex-1 py-3 bg-red-500/10 border border-red-500/20 text-red-500 font-bold rounded-2xl hover:bg-red-500 hover:text-white transition-all duration-300 active:scale-95 cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))
    ) : (
      <div className="w-full py-20 text-center">
        <h1 className="text-white text-4xl font-black tracking-tighter opacity-20">
          No Recipes Found...
        </h1>
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="flex flex-wrap justify-center gap-8">
        {renderRecipes}
      </div>
    </div>
  );
};

export default Recipes;
