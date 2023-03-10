import React from 'react'
import { useParams } from 'react-router'

const Description = ({movies}) => {
   const {id} =useParams()
   const thisMov = movies.find((e)=>e.id===id)
  return (
    <div>
        <h1>
           {thisMov.Title}
        
        </h1>
        <h6> {thisMov.Description} </h6>
        
        <iframe width="560" height="315" src={thisMov.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        
    </div>
    
    

  )
}

export default Description