import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PhotoGrid: React.FC = () => {
  const [photos, setPhotos] = useState<string[]>([]);

  const fetchPhotos = async () => {
    const response = await axios.get('https://api.unsplash.com/photos/random?client_id=jz02R2K1RDGM523804ozOBlL6A__0fmcNXdOn2-I_gA&count=9');
    const photoUrls = response.data.map((photo: any) => photo.urls.small);
    setPhotos(photoUrls);
  };

  useEffect(() => {
    fetchPhotos();
    const intervalId = setInterval(fetchPhotos, 10000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="photo-grid">
      {photos.map((url, index) => (
        <img key={index} src={url} alt={`Photo ${index + 1}`} />
      ))}
    </div>
  );
};

export default PhotoGrid;