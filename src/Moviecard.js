
//import pic1 from "./Avengers.jpg";
// import pic2 from "./3 idiots.jpg";
// import pic3 from "./goadfather.jpg";
// import pic4 from "./godfather2.jpg"
// import pic5 from "./matrix.jpeg";

// import './index.css';

function MovieCard(props){

  //  console.log(this.props);

   const {movies,addStars,decStars,toggleFav,toggleCart}=props;
   const {title,plot,price,rating,stars,fav,cart,poster} = props.movies;

    return (
      <div className="main">
      {/* <div className="movie-card"> */}

        <div className="left">
          <img alt="poster" 
          src={poster} />
        </div>

        <div className="right">
          <div className="title">{title}</div>
          <div className="plot">{plot}</div>
          <div className="price">{price}</div>

          <div className="footer">
            <div className="rating">{rating}</div>
            <div className="star-dis">

            <img className="str-btn"
            alt="decrease"
            // copy img address
            src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png"    
            onClick={() =>{decStars(movies)}}/>

              <div className="stars">
                <img alt="star"
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                  />
                  </div>
     
                <img className="str-btn"
                alt="increase"
               src="https://cdn-icons-png.flaticon.com/128/748/748113.png"
                onClick={() => {addStars(movies)}}
                />

                <span className="starCount">{stars}</span>

            </div>
            
            {/* {fav ? (
              <button className="favourite-btn" onClick={toggleFav(movies)}>Favourite</button>
            ) : (
              <button className="unfavourite-btn"  onClick={toggleFav(movies)}>Unfavourite</button>
            )}

            {cart? (
                <button className="cart-btn"  onClick={toggleCart(movies)}>Add to cart</button>
            ) : (
                <button className="remove-btn"  onClick={toggleCart(movies)}>Remove to cart</button>
            )} 
                                                 OR
            */    
                                
            }

            <button className={fav?"favourite-btn":"unfavourite-btn"}
            onClick={()=>{toggleFav(movies)}}>{fav?"Favourite":"Unfavourite"}</button>

          <button className={cart?"cart-btn":"remove-btn"}
            onClick={()=>{toggleCart(movies)}}>{cart?"Add to cart":"Remove from cart"}</button>
           
          </div>
        </div>
      </div>
      // </div>
      
    );
  }


export default MovieCard;