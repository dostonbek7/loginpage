import useCollection from "../hooks/useCollection";
import { useGlobalContext } from "../hooks/useGlobalContext";
import RecipiesList from "../pages/RecipesList";
import { Watch } from 'react-loader-spinner'


function Home() {
  const { user }= useGlobalContext()
  const { documents: recipies, isPending } = useCollection("foods", ['userId', '==', user.uid]);

  return (
    <div className="h-screen">
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