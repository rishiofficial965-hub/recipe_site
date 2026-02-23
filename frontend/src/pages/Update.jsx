import React, { useContext, useEffect, useState } from "react";
import { recipecontext } from "../context/recipeContext.js";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, updateRecipe } = useContext(recipecontext);

  const [title, settitle] = useState("");
  const [ingredients, setingredients] = useState("");
  const [instruction, setinstruction] = useState("");
  const [mealType, setmeal] = useState("");
  const [file, setfile] = useState("");

  useEffect(() => {
    const recipe = data.find((r) => r.id.toString() === id.toString());
    if (recipe) {
      settitle(recipe.name || recipe.title);
      setingredients(recipe.ingredients.join(", "));
      setinstruction(recipe.instructions.join("\n"));
      setmeal(recipe.mealType || "");
      setfile(recipe.image || "");
    }
  }, [id, data]);

  const SubmitHandler = (e) => {
    e.preventDefault();
    const updatedRecipe = {
      name: title,
      ingredients: ingredients.split(",").map((s) => s.trim()),
      instructions: instruction
        .split("\n")
        .filter((s) => s.trim() !== "")
        .map((s) => s.trim()),
      mealType,
      image: file,
    };

    updateRecipe(Number(id) || id, updatedRecipe);
    toast.success("Recipe updated successfully!");
    navigate("/recipes");
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-10 md:p-16 shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-10 tracking-tighter">
          UPDATE <span className="text-yellow-400">RECIPE</span>
        </h1>

        <form onSubmit={SubmitHandler} className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">
                Recipe Image URL
              </label>
              <input
                className="bg-white/5 border border-white/10 px-6 py-4 rounded-2xl outline-none text-white focus:border-yellow-400/50 transition-all placeholder:text-white/20"
                onChange={(e) => setfile(e.target.value.trim())}
                type="url"
                value={file}
                placeholder="https://images.unsplash.com/..."
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">
                Recipe Title
              </label>
              <input
                className="bg-white/5 border border-white/10 px-6 py-4 rounded-2xl outline-none text-white focus:border-yellow-400/50 transition-all placeholder:text-white/20"
                onChange={(e) => settitle(e.target.value)}
                type="text"
                value={title}
                placeholder="Classic Margherita..."
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">
              Meal Type
            </label>
            <input
              className="bg-white/5 border border-white/10 px-6 py-4 rounded-2xl outline-none text-white focus:border-yellow-400/50 transition-all placeholder:text-white/20"
              onChange={(e) => setmeal(e.target.value)}
              type="text"
              value={mealType}
              placeholder="Breakfast, Lunch, Dinner..."
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">
              Ingredients (Comma Separated)
            </label>
            <textarea
              className="bg-white/5 border border-white/10 px-6 py-4 rounded-2xl outline-none text-white focus:border-yellow-400/50 transition-all placeholder:text-white/20 h-32 resize-none"
              onChange={(e) => setingredients(e.target.value)}
              value={ingredients}
              placeholder="Flour, Water, Yeast, Salt..."
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">
              Instructions (One per line)
            </label>
            <textarea
              className="bg-white/5 border border-white/10 px-6 py-4 rounded-2xl outline-none text-white focus:border-yellow-400/50 transition-all placeholder:text-white/20 h-44 resize-none"
              onChange={(e) => setinstruction(e.target.value)}
              value={instruction}
              placeholder="1. Mix ingredients...&#10;2. Knead dough..."
            />
          </div>

          <div className="flex gap-4 mt-4">
            <button
              type="submit"
              className="flex-1 px-8 py-4 bg-yellow-400 text-black font-black uppercase tracking-widest rounded-2xl hover:bg-yellow-300 transition-all active:scale-95 shadow-xl shadow-yellow-400/20 cursor-pointer"
            >
              Update Recipe
            </button>
            <button
              type="button"
              onClick={() => navigate("/recipes")}
              className="flex-1 px-8 py-4 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest rounded-2xl hover:bg-white/10 transition-all active:scale-95 cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
