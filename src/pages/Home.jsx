import useCollection from "../hooks/useCollection";
import RecipiesList from "../pages/RecipesList";

function Home() {
  const { documents: recipies, isPending } = useCollection("foods");

  return (
    <div>
      {isPending && <h1 className="text-2xl">Loading...</h1>}
      {recipies && <RecipiesList recipies={recipies}/>}
    </div>
  );
}

export default Home;