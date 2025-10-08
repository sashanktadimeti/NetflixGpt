import { addTeluguMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const url = "https://api.themoviedb.org/3/trending/tv/day?language=en-US";
const useTeluguMovies = () => {
  const dispatch = useDispatch();
  const trendingseries=useSelector((store)=>{
    return store.teluguMovies
  })
  const gettelugumovies = async () => {
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    dispatch(addTeluguMovies(json.results));
  };
  useEffect(() => {
    !trendingseries && gettelugumovies();
  }, []);
};

export default useTeluguMovies;
