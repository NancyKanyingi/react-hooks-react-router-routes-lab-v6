import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
    const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then((res) => res.json())
      .then((data) => setDirectors(data));
  }, []);
  return (
    <>
      <header>
        <NavBar />
        <h1>Directors Pages</h1>
        {/* What component should go here? */}
      </header>
      <main>
          {directors.map((director) => (
        <article key={director.name}>
        <h2>{director.name}</h2>
              <ul>
            {director.movies.map((movie, index) => (
              (<li key={index}>{movie}</li>
            )))}
          </ul>
            </article>,
        {/* Director info here! */}
          ))})
      </main>
    </>
  );
};

export default Directors;
