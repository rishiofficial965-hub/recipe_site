import React, { useContext, useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { recipecontext } from "../context/recipeContext.js";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useContext(recipecontext);
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = data.find((r) => r.id.toString() === id.toString());
    if (foundRecipe) {
      setRecipe(foundRecipe);
    }
  }, [id, data]);

  if (!recipe) {
    return (
      <div className="w-full h-[80vh] flex items-center justify-center">
        <h1 className="text-white text-4xl font-black opacity-20 tracking-tighter">
          Recipe Not Found...
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 text-white">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-10 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all flex items-center gap-3 font-bold active:scale-95 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
        Back to Recipes
      </button>

      <div className="flex flex-col lg:flex-row gap-16">
        {/* Left: Image & Quick Info */}
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="w-full aspect-square md:aspect-video lg:aspect-square overflow-hidden rounded-[3rem] shadow-2xl relative">
            <img
              className="w-full h-full object-cover"
              src={recipe.image}
              alt={recipe.name}
            />
            <div className="absolute top-8 right-8">
              <span className="bg-yellow-400 text-black px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest shadow-xl">
                {recipe.mealType || "Recipe"}
              </span>
            </div>
          </div>
          
          <div className="flex gap-4">
            <Link
              to={`/update/${recipe.id}`}
              className="flex-1 text-center py-4 bg-yellow-400 text-black font-black uppercase tracking-widest rounded-3xl hover:bg-yellow-300 transition-all active:scale-95 shadow-xl shadow-yellow-400/20"
            >
              Edit Recipe
            </Link>
          </div>
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-1/2 space-y-12">
          <div>
            <h1 className="text-6xl md:text-7xl font-black tracking-tighter leading-none mb-6">
              {recipe.name}
            </h1>
            <div className="w-20 h-2 bg-yellow-400 rounded-full"></div>
          </div>

          {/* Ingredients */}
          <section>
            <h2 className="text-3xl font-black mb-6 uppercase tracking-tight flex items-center gap-4">
              <span className="text-yellow-400">01</span> Ingredients
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {recipe.ingredients.map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Instructions */}
          <section>
            <h2 className="text-3xl font-black mb-6 uppercase tracking-tight flex items-center gap-4">
              <span className="text-yellow-400">02</span> Instructions
            </h2>
            <div className="space-y-6">
              {recipe.instructions.map((step, i) => (
                <div key={i} className="flex gap-6 group">
                  <span className="text-lg font-black text-white/20 group-hover:text-yellow-400/50 transition-colors">
                    {(i + 1).toString().padStart(2, "0")}
                  </span>
                  <p className="text-lg text-gray-400 leading-relaxed font-light mt-1">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Details;
