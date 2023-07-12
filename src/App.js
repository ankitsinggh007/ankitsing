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

        {/* Twitter specific meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="My Website" />
        <meta name="twitter:description" content="random image generator" />
        <meta name="twitter:image" content={imageUrl} />
      </Helmet>

      <img src={imageUrl} alt={imageUrl} style={{ display: 'block', margin: '0 auto' }} />
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <FacebookShareButton url={shareUrl}>
          Facebook
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl}>
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
