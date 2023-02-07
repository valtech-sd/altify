import Head from 'next/head';
import { useState } from 'react';

import styles from './index.module.css';
import { serverUrl } from '../constants/constants';
import { Input, ImageCard, Alert } from '../components';

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

    let url;
    if (imageInput.startsWith('www')) {
      url = `https://${imageInput}`;
    } else if (!imageInput.startsWith('https://')) {
      url = `https://${imageInput}`;
    } else {
      url = imageInput;
    }

    if (url !== imageInput) {
      setImageInput(url);
    }

    setLoading(true);
    const response = await fetch(`${serverUrl}/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authentication: password,
      },
      body: JSON.stringify({ url }),
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
      alert('No image tags found');
      return;
    }
    setResult(data.result);
    setLoading(false);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleInputChange(event) {
    setImageInput(event.target.value);
  }

  if (!correctPassword) {
    return (
      <Alert
        autoFocus
        setCorrectPassword={setCorrectPassword}
        handlePasswordChange={handlePasswordChange}
        password={password}
      />
    );
  }

  console.log('result', result);

  return (
    <div>
      <Head>
        <title>Altify - Valtech Future Studio</title>
        <link rel="icon" href="/valtechLogo-black.png" />
      </Head>

      <main className={styles.main}>
        <form onSubmit={onSubmit}>
          <img src="./valtechLogo-black.png" className={styles.icon} />
          <Input
            autoFocus
            type="text"
            name="image url"
            placeholder="Enter a url"
            value={imageInput}
            onChange={handleInputChange}
            fullWidth
          />
          <input disabled={!imageInput} type="submit" value="Analyze URL" style={{ width: 320 }} />
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
          {result?.length && <p style={{ marginBottom: -20 }}>{result.length} Images Detected</p>}
          {Array.isArray(result) &&
            result.map((image, idx) => {
              return (
                <ImageCard
                  key={`altify-image-${idx}`}
                  index={idx}
                  image={image}
                  password={password}
                  total={result?.length}
                />
              );
            })}
        </div>
      </main>
    </div>
  );
}
