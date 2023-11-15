import axios from "axios";
import { apiKey } from "../constants";


// endpoints
const trendingMoviesEndpoint = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`;
const upcomingMoviesEndpoint = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`;
const topRatedMoviesEndpoint = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;

// functions to get images of different widths, (show images using these to improve the loading times)
export const image500 = posterPath=> posterPath? 'https://image.tmdb.org/t/p/w500'+posterPath : null;
export const image185 = posterPath=> posterPath? 'https://image.tmdb.org/t/p/w185'+posterPath : null;



const apiCall = async (endpoint, params)=>{
    const options = {
        method: 'GET',
        url: endpoint,
        params: params? params: {}
    };

    try{
        const response = await axios.request(options);
        return response.data;
    }catch(error){
        console.log('error: ',error);
        return {};
    }
}

// home screen apis
export const fetchTrendingMovies = ()=>{
    return apiCall(trendingMoviesEndpoint);
}
export const fetchUpcomingMovies = ()=>{
    return apiCall(upcomingMoviesEndpoint);
}
export const fetchTopRatedMovies = ()=>{
    return apiCall(topRatedMoviesEndpoint);
}
