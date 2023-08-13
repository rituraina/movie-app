// import MovieCard from "./Moviecard";
import React from "react"
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import { movies } from "./movieData";
import "./index.css"



class App extends React.Component{

  constructor() {
    super();
    this.state = {
      movies:movies ,
      cartCount: 0

    }
  }

  handleIncStars = (movie) => {
    // debugger;
    const {movies} = this.state;
    const mid = movies.indexOf(movie);
    if(movies[mid].stars === undefined) 
      movies[mid].stars = 0;
    if(movies[mid].stars <= 5) {
        movies[mid].stars += 0.5;
    
        this.setState({
          movies:movies
        })
      }
    }

  //   if(movies[mid].stars >= 5) {
  //     return;
  //   }
  //   movies[mid].stars += 0.5;

  //   this.setState({
  //     movies
  //   })
  // }

  handleDecStars = (movie) => {
    const {movies} = this.state;
    const mid = movies.indexOf(movie);

     if(movies[mid].stars > 0) {
         
        movies[mid].stars -= 0.5;
    
        this.setState({
          movies
        })
      }
      }

  //   if(movies[mid].stars <= 0) {
  //     return;
  //   }
  //   movies[mid].stars -= 0.5;

  //   this.setState({
  //     movies:movies
  //   })
  // }

  handleToggleFav = (movie) => {
    const {movies} = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].fav = !movies[mid].fav;

    this.setState({
      movies
    })
  }
  handleToggleCart = (movie) => {
    let {movies, cartCount} = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].cart = !movies[mid].cart;
    console.log(movies[mid].cart)

    if(movies[mid].cart){
       cartCount = cartCount -1;
    }
    else{
      cartCount += 1
    }

    this.setState({
      movies,
      cartCount
    })
      console.log(cartCount)
   
  }

  render(){
    const {movies,cartCount} =this.state;
return (
   <>
<Navbar cartCount={cartCount}/>  
<MovieList movies ={movies}
            // key={movies.title}
            addStars={this.handleIncStars}
            decStars={this.handleDecStars}
            toggleFav={this.handleToggleFav}
            toggleCart={this.handleToggleCart}
             />
   </>
  );
}
}

export default App;
