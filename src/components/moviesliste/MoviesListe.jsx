import React from 'react'
import Moviecard from '../moviecards/MovieCard'
import './movieliste.css'


function MoviesListe({movies , deletedMov}) {
  return (
    <div className='Cards'>
       {
        movies.map((e) =>  <Moviecard e={e} deletedMov={deletedMov}></Moviecard>) 
       }

    </div>
  )
}     

export default MoviesListe