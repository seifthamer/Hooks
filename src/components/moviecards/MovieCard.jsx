import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import StarRatingComponent from 'react-star-rating-component';


function MovieCard({e,deletedMov}) {
    

  return (
    <div >
        <Card style={{ width: '18rem' }}>
    <Card.Img  variant="top" src= {e.Image} />
    <Card.Body>
      <Card.Title> {e.Title} </Card.Title>
      <Card.Text>
       {e.Description}
      </Card.Text>
      <Button variant="primary" onClick={deletedMov}>Delete</Button>
    </Card.Body>
    <StarRatingComponent 
          name="rate2" 
          editing={false}
          value={e.Rate}
        />
  </Card>
  </div>
  )
}

export default MovieCard