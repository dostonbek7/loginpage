import React, { useRef } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { useAddDoc } from "../hooks/useAddDoc";

function Create() {
  const { user } = useGlobalContext();
  const { createNewDoc } = useAddDoc();

  const [images, setImages] = useState([]);
  const [image, setImage] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [ingredient, setIngredient] = useState([]);

  const title = useRef();
  const cookingTime = useRef();
  const method = useRef();
  const form = useRef();

  const handleImage = (e) => {
    e.preventDefault();
    if (images.length < 4) {
      const check = /(https?:\/\/.*\.(?:png|jpg))/;
      if (!images.includes(image.trim()) && check.test(image.trim())) {
        setImages((prev) => {
          return [...prev, image];
        });
        toast.info("Image added");
      } else {
        toast.error("There is this picture");
      }
    } else {
      toast.warn("You can not add more then 4 images");
    }
    setImage("");
  };
  const handleIngredient = (e) => {
    e.preventDefault();

    setIngredients((prev) => {
      return [...prev, ingredient];
    });
    setIngredient("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      userId: user.uid,
      title: title.current.value,
      cookingTime: `${cookingTime.current.value} minutes`,
      ingredients,
      method: method.current.value,
      images,
    };
    createNewDoc(data, "foods");
    form.current.reset();
  };
  return (
    <div className="py-10 px-2 max-w-[360px] mx-auto md:max-w-lg">
      <h1 className="text-center text-3xl md:text-4xl font-medium dark:text-white">
        Create New Recipe
      </h1>
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="mx-auto mt-4 w-full lg:max-w-lg"
      >
        <label
          htmlFor="default-input"
          className="mb-2 block text-lg font-bold text-gray-900 dark:text-white"
        >
          Title:
        </label>
        <input
          ref={title}
          type="text"
          id="default-input"
          autoComplete="off"
          required
          className="mb-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        ></input>
        <label
          htmlFor="default-input"
          className="mb-2 block text-lg font-bold text-gray-900 dark:text-white"
        >
          Cooking Time:
        </label>
        <input
          ref={cookingTime}
          type="text"
          id="default-input"
          autoComplete="off"
          required
          className="mb-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        ></input>
        <label
          htmlFor="default-input"
          className="mb-2 block text-lg font-bold text-gray-900 dark:text-white"
        >
          Ingredients:
        </label>
        <div className="mb-1 flex items-center justify-center gap-2">
          <input
            onChange={(e) => {
              setIngredient(e.target.value);
            }}
            value={ingredient}
            type="text"
            id="default-input"
            autoComplete="off"
            className=" block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          ></input>
          <button
            type="button"
            onClick={handleIngredient}
            className="btn btn-success text-white text-sm"
          >
            add
          </button>
        </div>
        <small className="text-sm font-medium dark:text-white">
          Ingredient:
          {ingredients.length > 0 ? (
            ingredients.map((ingredient) => {
              return <i className="ml-[2px]" key={ingredient}>{ingredient + ","}</i>;
            })
          ) : (
            <span className="ml-3 rounded-xl border border-orange-500 px-3 py-1 text-center font-mono text-xs dark:text-white">
              ! No ingredients yet
            </span>
          )}
        </small>
        <label
          htmlFor="default-input"
          className="mb-2 block text-lg font-bold text-gray-900 dark:text-white"
        >
          Mehtod:
        </label>
        <textarea
          ref={method}
          id="default-input"
          rows="2"
          className="mb-2 block w-full rounded-lg border  border-gray-300 p-2.5 text-sm text-gray-900 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Write your thoughts here... "
        ></textarea>
        <label
          htmlFor="default-input"
          className="mb-2 block text-lg font-bold text-gray-900 dark:text-white"
        >
          Images:
        </label>
        <div className="mb-3 flex items-center justify-center gap-2">
          <input
            onChange={(e) => setImage(e.target.value)}
            type="text"
            id="default-input"
            autoComplete="off"
            placeholder="Img url"
            value={image}
            className=" block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          ></input>
          <button
            onClick={handleImage}
            className="btn btn-success text-base font-medium text-white"
          >
            add
          </button>
        </div>
        <div className="mb-4 grid grid-cols-2 gap-2 md:grid-cols-4">
          {images.length > 0 ? (
            images.map((image) => {
              return (
                <img
                  key={image}
                  className="h-20 w-full rounded-lg object-cover md:h-24"
                  src={image}
                  alt=""
                />
              );
            })
          ) : (
            <span className="rounded-xl border border-orange-500 px-3 text-center font-mono text-xs dark:text-white">
              ! No images yet
            </span>
          )}
        </div>
        <button className="btn btn-success w-full text-base font-medium text-white">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Create;