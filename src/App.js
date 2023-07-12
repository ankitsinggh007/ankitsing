import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';

const App = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRandomImage();
  }, []);

  const fetchRandomImage = async () => {
    try {
      const response = await fetch('https://picsum.photos/500');
      setImageUrl(response.url);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching random image:', error);
    }
  };

  const shareUrl = window.location.href;

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Helmet>
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={shareUrl} />
        <meta property="og:description" content="random image generator" />
        <meta property="og:title" content="My Website" />
        <meta property="og:type" content="website" />
        {console.log(imageUrl,"image")}
      </Helmet>

      <img src={imageUrl} alt="Random Image" style={{ display: 'block', margin: '0 auto' }} />
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <FacebookShareButton url={shareUrl}>
          Facebook
        </FacebookShareButton>
        <TwitterShareButton
          url={shareUrl}
          title="My Website - Random Image"
          via="your-twitter-handle" // Replace with your Twitter handle
          hashtags={['random', 'image']}
          related={['twitterdev']}
        >
          Twitter
        </TwitterShareButton>
        <WhatsappShareButton url={shareUrl}>
          WhatsApp
        </WhatsappShareButton>
      </div>
    </div>
  );
};

export default App;
