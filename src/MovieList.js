import MovieCard from "./Moviecard";


function MovieList(props) {
 
 
    const {movies, addStars, decStars,toggleFav, toggleCart} =props;
    console.log(props);

    return (
      <>
        {movies.map((movie) => 
          <MovieCard
            movies={movie}
            addStars={addStars}
            decStars={decStars}
            toggleFav={ toggleFav}
            toggleCart={toggleCart}
            
          />
        )}
      </>
    )
  }


export default MovieList;
