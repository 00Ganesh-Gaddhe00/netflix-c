import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from './axios';

const base_url = "https://image.tmdb.org/t/p/original"


function Row({title, fetchurl, isLargeRow = false}) {
const [movies, setMovies] = useState([]);

useEffect(()=>{
    async function fetchData() {
        const request = await axios.get(fetchurl)
        setMovies(request.data.results);
        return request
    }
    fetchData();
},[fetchurl]);
console.log(movies)

  return (
    <div className='row'>
    <h2>{title}</h2>
    <div className='row_posters'>
    {movies.map(movie=>(
        <img className={`row_poster ${isLargeRow && "row_posterLarge"}`} src={`${base_url}${isLargeRow?movie.poster_path:movie.backdrop_path}`} alt={movie.name}/>
    ))}
</div>

    </div>
  )
}

export default Row;