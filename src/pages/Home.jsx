import MovieCard from "../components/MovieCard"
import { useState } from "react";

function Home(){
    const movies= [
        {id:1,title:"Intersetllar",release_date:"2014"},
        {id:2,title:"John Wick",release_date:"2007"},
        {id:3,title:"Inception",release_date:"2010"},
    ]

    const [searchQuery,setSearchQuery] = useState("");

    const handleSearch = (e)=>{
        e.preventDefault()
        alert(searchQuery)
    };
    return(
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                  type="text"
                  placeholder="Seach for movies"
                  className="search-input" 
                  value={searchQuery} 
                  onChange={(e)=>setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="movie-grid">
                {movies.map((movie) => 
                movie.title.toLowerCase().startsWith(searchQuery) &&
                <MovieCard key={movie.id} movie={movie} />
                )}
            </div>
        </div>
    );
}
export default Home;