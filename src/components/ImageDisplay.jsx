import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import ShareButtons from './ShareButtons';

const ImageDisplay = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetchRandomImage();
  }, []);

  const fetchRandomImage = async () => {
    try {
      const response = await fetch('https://picsum.photos/500');
      const data = await response.json();
      setImageUrl(data.url);
    } catch (error) {
      console.error('Error fetching random image:', error);
    }
  };
  

  return (
    <div>
      <Helmet>
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:description" content="random image generator" />
        <meta property="og:title" content="My Website" />
        <meta property="og:type" content="website" />

        {/* Twitter specific meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="My Website" />
        <meta name="twitter:description" content="random image generator" />
        <meta name="twitter:image" content={imageUrl} />
        {console.log(imageUrl,"image")}
      </Helmet>
      <img src={imageUrl} alt="Random Image" style={{ display: 'block', margin: '0 auto' }} />

      <ShareButtons />
    </div>
  );
};

export default ImageDisplay;
