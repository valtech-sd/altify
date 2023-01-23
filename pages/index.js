import Head from 'next/head';
import { useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import styles from './index.module.css';
import { serverUrl } from '../constants/constants';
import { Azure, CloudVision } from '../components';

export default function Home() {
  const [imageInput, setImageInput] = useState('');
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(false);

  async function onSubmit(event) {
    event.preventDefault();
    setLoading(true);
    const response = await fetch(`${serverUrl}/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: imageInput }),
    });
    const data = await response.json();
    setResult(data.result);
    setLoading(false);
  }

  return (
    <div>
      <Head>
        <title>OpenAI Quickstart</title>
        <link rel="icon" href="/valtechLogo-black.png" />
      </Head>

      <main className={styles.main}>
        <form onSubmit={onSubmit}>
          <img src="./valtechLogo-black.png" className={styles.icon} />
          <input type="text" name="image url" placeholder="Enter an url" value={imageInput} onChange={(e) => setImageInput(e.target.value)} />
          <input type="submit" value="Analize URL" />
        </form>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '80%',
            marginTop: '20px',
          }}
        >
          <div style={{ margin: '0 auto' }}>{loading && <div className="loading-bar"></div>}</div>
          {result && (
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
              <Masonry gutter="1.5rem">
                {Array.isArray(result) &&
                  result.map((image, idx) => {
                    return (
                      <div key={`altify-image-${idx}`} style={{ display: 'flex', flexDirection: 'column' }}>
                        <img src={image.image} alt="" style={{ width: '100%' }} />
                        <Azure src={image} />
                        <CloudVision src={image} />
                      </div>
                    );
                  })}
              </Masonry>
            </ResponsiveMasonry>
          )}
        </div>
      </main>
    </div>
  );
}
