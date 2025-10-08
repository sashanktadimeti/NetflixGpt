import { useDispatch, useSelector} from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { useEffect } from "react"
import { addUpcomingMovies } from "../utils/movieSlice"
const useUpcomingMoviesList=()=>{
    const dispatch=useDispatch()
    const store=useSelector((store)=>{
      return store.movies.upcomingMovies
    })
  const movieslist=async()=>{
    try{
    const data=await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",API_OPTIONS)
    const movielist=await data.json();
    dispatch(addUpcomingMovies(movielist.results))
    }
    catch(error){
      console.error(error);
    }
  }
  useEffect(()=>{
    !store && movieslist();
  },[])
}
export default useUpcomingMoviesList;