import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Gallery = () => {

    const [imageURL, setImageURL] = useState(null)

   useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos", { mode: "cors" })
    .then((response) => response.json())
    .then((response) => setImageURL(response[10].url))
    .catch((error) => console.error(error))
   }, [])
    
    
  return (
        <div>
        <Link to="/">Home Page</Link>

        <h3>Gallery</h3>

        {imageURL && <img src={imageURL} alt={"placeholder text"}
        style={{width: '250px', height: '250px'}}/> }

        </div>
    ) 
}

export default Gallery;
