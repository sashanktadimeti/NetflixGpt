import { useSelector } from "react-redux";
import VideoTitle from "./videoTitle";
import VideoBackGround from "./videoBackGround";
const MainContainer = () => {
  const movies = useSelector((store) => {
    return store.movies.nowPlayingMovies;
  });
  
  if(movies===null){
    return(<div><p>Loading</p></div>);
  }
  return (
    <div className="relative w-12/12 h-screen">
      {(movies[3]) && <VideoBackGround id={movies[3].id}/>}
      {(movies[3]) &&<VideoTitle title={movies[3].original_title} overview={movies[3].overview} vote_average={movies[3].vote_average} /> }
    </div>
  );
};
export default MainContainer;
