import React, { useState } from "react";

const ThumbnailGallery = ({ selectedItem }) => {
  const [selectedThumbnailIndex, setSelectedThumbnailIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setSelectedThumbnailIndex(index);
  };

  return (
    <div className="thumbnail-gallery">
      <div className="main-image">
        <img
          src={selectedItem.thumbnails[selectedThumbnailIndex]}
          alt={selectedItem.name}
        />
      </div>
      <div className="thumbnails">
        {selectedItem.thumbnails.map((thumbnail, index) => (
          <img
            key={index}
            src={thumbnail}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => handleThumbnailClick(index)}
            className={
              index === selectedThumbnailIndex
                ? "selected thumbnail"
                : "thumbnail"
            }
          />
        ))}
      </div>
      {/* <div className="item-description">
        <h1>{selectedItem.name}</h1>
        <p>{selectedItem.description}</p>
        
      </div> */}
    </div>
  );
};

export default ThumbnailGallery;
