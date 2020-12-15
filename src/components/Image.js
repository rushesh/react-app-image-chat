import React, { useState, useEffect } from 'react';
import ImageCard from './ImageCard';
import ImageSearch from './ImageSearch';
import '../App.css';
import { CardGroup, Spinner } from 'react-bootstrap';

function Image() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [term]);

  return (
    <div className="container mx-auto">
      <ImageSearch searchText={(text) => setTerm(text)} />

      {!isLoading && images.length === 0 && <h1>No Images Found</h1> }

      {isLoading ?  <Spinner animation="grow" variant="danger"  role="status">
  <span className="sr-only">Loading...</span>
</Spinner> : <CardGroup>
        {images.map(image => (
          <ImageCard key={image.id} image={image} />
        ))}
      </CardGroup>}
    </div>
  );
}

export default Image;

