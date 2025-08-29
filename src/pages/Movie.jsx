import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Movie({movie}) {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (!movie) return <p>Loading...</p>;
  return (
    <>
      <header>
        <Navbar />
        {/* What component should go here? */}
        <h2>{movie.title}</h2>
      </header>
      <main>
        {/* Movie info here! */}
        <Link to={`{movie${movie.id}}`}> View Details </Link>
      </main>
    </>
  );
};

export default Movie;
