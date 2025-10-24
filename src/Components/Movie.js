const Movie = (props) => {
  return (
    <div className="movie">
         <img className="img" src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_.jpg"  alt="img not found" />
        <p>{props.title}</p>
        <p>year: {props.year}</p>
    </div>
  )
}

export default Movie;