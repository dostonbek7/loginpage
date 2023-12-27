import { useParams } from "react-router-dom";
import { useDoc } from "../hooks/useDoc";
import { Link } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";

function Recipe() {
  const { id } = useParams();
  const { recipe, isPending } = useDoc(id);
  return (
    <div className="max-container">
      <Link
        to="/"
        className="inline-flex gap-3 mt-5 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <FaLongArrowAltLeft />
        Home page
      </Link>
      {/* {isPending && <h1>Loading...</h1>} */}
      {recipe && (
        <div className="m-w-[400px] py-3 md:py-5">
          <div className="min-w-[100px] rounded overflow-hidden shadow-lg flex items-center flex-col md:flex-row">
            <div className="md:min-w-[400px]">
              <img
                className="w-full max-w-full object-cover rounded-md p-4"
                src={recipe.images[0]}
                alt="food image"
              />
            </div>
            <div className="px-6 py-4">
              <h1 className="font-bold text-lg mb-2">Title: {recipe.title}</h1>
              <ul className="font-semibold text-base mb-2 list-disc">
                {" "}
                Ingredients:
                {recipe.ingredient.map((ing) => {
                  return (
                    <li className="text-base font-medium ml-4" key={ing}>
                      {ing}
                    </li>
                  );
                })}
              </ul>
              <p className="text-gray-700 text-sm line-clamp-4 mb-2">
                <span className="font-semibold text-lg text-black" >Tavsif:</span>{" "}
                {recipe.method}
              </p>
              <p className="font-medium text-base mb-6">
                <span className="font-semibold">Cooking time:</span> {recipe.cookingTime}
              </p>
              <a
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                href="https://uz.wikipedia.org/wiki/Somsa"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Recipe;
