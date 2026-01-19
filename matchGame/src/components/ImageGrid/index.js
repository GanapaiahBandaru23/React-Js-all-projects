import React from 'react'

const ImageGrid = ({images, onThumbnailClick}) => (
  <ul className="image-grid">
    {images.map(image => (
      <li key={image.id}>
        <button onClick={() => onThumbnailClick(image.imageUrl)}>
          <img src={image.thumbnailUrl} alt="thumbnail" />
        </button>
      </li>
    ))}
  </ul>
)

export default ImageGrid
