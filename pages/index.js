import Head from 'next/head';
import { useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import styles from './index.module.css';
import { serverUrl } from '../constants/constants';
import { Input, ImageCard } from '../components';

export default function Home() {
  const [imageInput, setImageInput] = useState('');
  const [password, setPassword] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [correctPassword, setCorrectPassword] = useState(false);

  function clearState() {
    setResult(null);
  }

  async function onSubmit(event) {
    event.preventDefault();
    if (result?.length > 0) {
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
    setResult(data.result.filter((res) => !res.src?.endsWith('.svg')));
    setLoading(false);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleInputChange(event) {
    setImageInput(event.target.value);
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
          <Input type="text" name="image url" placeholder="Enter a url" value={imageInput} onChange={handleInputChange} />
          <Input
            disabled={correctPassword}
            type="password"
            name="password"
            placeholder="Enter the password"
            value={password}
            onChange={handlePasswordChange}
          />
          <input disabled={!password || !imageInput} type="submit" value="Analyze URL" />
        </form>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '80%',
            marginTop: '20px',
          }}
        >
          <div style={{ margin: '0 auto', height: 36 }}>{loading && <div className="loading-bar"></div>}</div>
          {result?.length && <p style={{ marginBottom: -20 }}>Images found: {result.length}</p>}
          {Array.isArray(result) &&
            result.map((image, idx) => {
              return <ImageCard key={`altify-image-${idx}`} index={idx} image={image} password={password} total={result?.length} />;
            })}
        </div>
      </main>
    </div>
  );
}
