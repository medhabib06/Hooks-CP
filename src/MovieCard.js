import React from 'react'



function MovieCard({movie}) {
    return (
        <div>
            <h2>Game of thrones</h2>
            <div className='card'>
           <div className='MI'>
               <img src="https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg" alt='movieimage'/>
           </div>
           <div className='MD'>
              game of thrones  game of thrones  game of thrones  game of thrones  game of thrones  game of thrones  game of thrones  game of thrones 
           </div>
           <div className='MR'>9/10</div>
           </div>

           
           <h2>{movie.name}</h2>
            <div className='card'>
           <div className='MI'>
               <img src={movie.imageLink} alt='movieimage'/>
           </div>
           <div className='MD'>
              {movie.description} 
           </div>
           <div className='MR'>{movie.rate}</div>
           </div>
        </div>
    )
}



export default MovieCard

