import useCollection from "../hooks/useCollection";
import RecipiesList from "../pages/RecipesList";
import { Watch } from 'react-loader-spinner'


function Home() {
  const { documents: recipies, isPending } = useCollection("foods");

  return (
    <div>
      <div className="z-10 center-loader">
        {isPending &&
        (<Watch
        visible={true}
        height="80"
        width="80"
        radius="48"
        color="#4fa94d"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClass=""
        />)}
      </div>
      {recipies && <RecipiesList recipies={recipies}/>}
    </div>
  );
}

export default Home;