import React, { useContext, useState } from "react";
import { recipecontext } from "../context/recipeContext.js";

const Create = () => {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [ingredients, setingredients] = useState("");
  const [instruction, setinstruction] = useState("");
  const [category, setCategory] = useState("");
  const [file, setfile] = useState("");

  const { setdata } = useContext(recipecontext);

  const SubmitHandler = (e) => {
    e.preventDefault();
    const copydata = {
      title,
      description,
      ingredients,
      instruction,
      category,
      imageUrl: file,
    };

    setdata((prev) => [...prev, copydata]);

    console.log("Saved:", copydata);

    // reset inputs
    settitle("");
    setdescription("");
    setingredients("");
    setinstruction("");
    setCategory("");
    setfile("");
  };
  return (
    <div
      className="px-6 py-10 mt-2 
    w-full bg-white/10 backdrop-blur-3xl border border-white/20 rounded-2xl shadow-lg"
    >
      <form onSubmit={SubmitHandler} className="flex flex-col gap-1.5 w-[45%] ">
        <input
          className="border px-2 py-2 rounded-2xl outline-none"
          onChange={(e) => {
            setfile(e.target.value);
          }}
          type="url"
          value={file}
          placeholder="Enter image url"
        />

        <input
          className="border px-2 py-2 rounded-2xl outline-none"
          onChange={(e) => {
            settitle(e.target.value);
          }}
          type="text"
          value={title}
          placeholder="Recipe Title"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border px-2 py-2 rounded-xl w-full cursor-pointer"
        >
          <option
            className="bg-gray-600 text-white rounded-2xl cursor-pointer"
            value=""
          >
            Select Category
          </option>
          <option
            className="bg-gray-600 text-white rounded-2xl cursor-pointer"
            value="veg"
          >
            Veg
          </option>
          <option
            className="bg-gray-600 text-white rounded-2xl cursor-pointer"
            value="nonveg"
          >
            Non-Veg
          </option>
          <option
            className="bg-gray-600 text-white rounded-2xl cursor-pointer"
            value="snacks"
          >
            Snacks
          </option>
        </select>
        
        <textarea
          className="border px-2 py-2 rounded-2xl outline-none"
          onChange={(e) => {
            setdescription(e.target.value);
          }}
          value={description}
          placeholder="Recipe Description"
        />

        <textarea
          className="border px-2 py-2 rounded-2xl outline-none"
          onChange={(e) => {
            setingredients(e.target.value);
          }}
          value={ingredients}
          placeholder="Recipe Ingredients"
        />

        <textarea
          className="border px-2 py-2 rounded-2xl outline-none"
          onChange={(e) => {
            setinstruction(e.target.value);
          }}
          value={instruction}
          placeholder="Recipe instruction"
        />

        <button
          type="submit"
          className="w-fit bg-red-900 px-3 py-2 rounded-2xl active:scale-95 cursor-pointer"
        >
          Create recipe
        </button>
      </form>
    </div>
  );
};

export default Create;
