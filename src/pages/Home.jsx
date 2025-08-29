import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const[movies, setMovies] = useState([])

  useEffect(() =>{
      fetch("http://localhost:4000")
      .then((response)=>response.json)
      .then((data)=>setMovies(data))
  }, [])
  return (
    <>
      <header>
        <Navbar />
        <h1>HomePage</h1>
        {/* What component should go here? */}
      </header>
      <main>
        {movies.map((movies)=>(
          <Movie key={movies.id} movie={movie} />
        ))}
        {/* Info goes here! */}
      </main>
    </>
  );
};

export default Home;
