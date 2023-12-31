import { Link } from "react-router-dom";

function RecipesList({ recipies }) {
  return (
    <div className="max-container">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 py-5">
        {recipies.map((recipie) => {
          const { id, title, cookingTime, method, time, ingredients, images } =
            recipie;
          return (
            <li
              key={id}
              className="max-w-[500px] md:min-w-[340px] lg:min-w-[350px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <img className="rounded-t-lg" src={images[0]} alt="" />
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Title: <span className="font-medium">{title}</span>
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
                  <span className="font-bold dark:text-white text-black">
                    Method:{" "}
                  </span>
                  {method}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
                  <span className="font-bold dark:text-white text-black mr-1">
                    Ingredients:
                  </span>
                  {ingredients.join(',')}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
                  <span className="font-bold dark:text-white text-black">
                    Cooking time:{" "}
                  </span>
                  {cookingTime}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
                  <span className="font-bold dark:text-white text-black">
                    Time:{" "}
                  </span>
                  {time}
                </p>
                <Link
                  to={`recipe/${id}`}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default RecipesList;
