import Head from 'next/head';
import { useEffect, useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import styles from './index.module.css';
import { serverUrl } from '../constants/constants';
import { AltText, Azure, CloudVision, Input } from '../components';

export default function Home() {
  const [imageInput, setImageInput] = useState('');
  const [password, setPassword] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [correctPassword, setCorrectPassword] = useState(false);
  const [length, setLength] = useState(0);
  let counter = 0;

  function clearState() {
    setResult(null);
  }

  async function onSubmit(event) {
    event.preventDefault();
    if (length > 0) {
      clearState();
    }
    setLoading(true);
    const response = await fetch(`${serverUrl}/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authentication: password,
      },
      body: JSON.stringify({ url: imageInput }),
    });
    if (response.status === 401) {
      setLoading(false);
      alert('Wrong password');
      return;
    }
    setCorrectPassword(true);
    const data = await response.json();
    if (data.result.length === 0) {
      setLoading(false);
      alert('No images found');
      return;
    }
    // setLength(data.result.length);
    setResult(data.result);
    setLoading(false);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleInputChange(event) {
    setImageInput(event.target.value);
  }

  useEffect(() => {
    const svg = result?.filter((res) => res.src?.endsWith('.svg'));
    setLength(result?.length - svg?.length || 0);
  }, [result]);

  return (
    <div>
      <Head>
        <title>OpenAI Quickstart</title>
        <link rel="icon" href="/valtechLogo-black.png" />
      </Head>

      <main className={styles.main}>
        <form onSubmit={onSubmit}>
          <img src="./valtechLogo-black.png" className={styles.icon} />
          <Input type="text" name="image url" placeholder="Enter a url" value={imageInput} onChange={handleInputChange} />
          <Input
            type="password"
            disabled={correctPassword}
            name="password"
            placeholder="Enter the password"
            value={password}
            onChange={handlePasswordChange}
          />
          <input disabled={!password || !imageInput} type="submit" value="Analyze URL" />
          <p>Images found: {length}</p>
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
                    if (image.src?.endsWith('.svg')) {
                      return;
                    } else {
                      counter++;
                    }
                    return (
                      <div key={`altify-image-${idx}`} style={{ display: 'flex', flexDirection: 'column' }}>
                        <img src={image.image} alt="" style={{ width: '100%' }} />
                        <AltText altText={image.current} index={counter} src={image.src} />
                        <Azure src={image} password={password} />
                        <CloudVision src={image} password={password} />
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
