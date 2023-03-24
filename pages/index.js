import Head from 'next/head';
import { useState, useContext } from 'react';

import { SelectStyles } from '../components/Card/styles';
import { FormControl, MenuItem, Select } from '@mui/material';
import styles from './index.module.css';
import { serverUrl } from '../constants/constants';
import { StateContext } from '../context/state';
import { updateQueryStringParameter } from '../utils';
import { Input, ImageCard, Alert, Button, BasicAlertDialog } from '../components';

export default function Home() {
  const [imageInput, setImageInput] = useState('');
  const [password, setPassword] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [correctPassword, setCorrectPassword] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [gptModel, setGPTModel] = useState('gpt-4');
  const { state, dispatch } = useContext(StateContext);

  const toggleShowAlert = () => setShowAlert((value) => !value);

  function clearState() {
    setResult(null);
  }

  async function onSubmit(event) {
    event.preventDefault();
    dispatch({
      type: 'resetCounter',
    });
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

    // some websites, like https://www.valtech.com/work/loreal-kerastase/ have images with query params that have tiny widths... this
    // causes altify to render the image poorly. This method makes adjustments to the image width query param if present to proper width.
    const modifiedResponse = data.result.map((img) => {
      const params = new URL(img.image).searchParams;
      const width = params.get('width');

      if (width && width < 200) {
        const updatedImageUrl = updateQueryStringParameter(img.image, 'width', '400px');
        return { ...img, image: updatedImageUrl };
      } else {
        return img;
      }
    });

    setResult(modifiedResponse);
    setLoading(false);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleInputChange(event) {
    setImageInput(event.target.value);
  }

  function handleChangeGPTModel(event) {
    const { value } = event.target;
    setGPTModel(value);
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

  const gptOptions = [{ model: 'gpt-4' }, { model: 'gpt-3.5-turbo' }];

  return (
    <div>
      <Head>
        <title>Altify - Valtech Future Studio</title>
        <link rel="icon" href="/valtechLogo-black.png" />
      </Head>

      <main className={styles.main}>
        {showAlert && (
          <BasicAlertDialog
            toggleShowAlert={toggleShowAlert}
            title={`Exported (${state.counter}) Tags to CMS`}
            buttonText="Close"
          />
        )}
        <form onSubmit={onSubmit}>
          <img src="./valtechLogo-black.png" className={styles.icon} alt="valtech logo" />
          <Input
            autoFocus
            type="text"
            name="image url"
            placeholder="Enter a url"
            value={imageInput}
            onChange={handleInputChange}
            fullWidth
          />
          <input disabled={!imageInput} type="submit" value="Analyze URL" style={{ width: 320, height: '60px' }} />
        </form>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '80%',
            margin: '24px 0 80px',
          }}
        >
          <div style={{ margin: '0 auto', height: 36 }}>{loading && <div className="loading-bar"></div>}</div>
          {result?.length && (
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <p style={{}}>{result.length} Images Detected</p>
                <FormControl sx={{ width: 160 }}>
                  <Select
                    labelId="gpt-model-select"
                    id="model-select"
                    value={gptModel}
                    onChange={handleChangeGPTModel}
                    sx={SelectStyles}
                  >
                    {gptOptions.map((option) => {
                      return (
                        <MenuItem key={option.model} value={option.model}>
                          {option.model}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </div>
              <Button
                secondary
                exact="true"
                onClick={toggleShowAlert}
                header={state.counter === 0 ? `Export to CMS` : `Export (${state.counter}) to CMS`}
                sx={{ width: '180px' }}
              />
            </div>
          )}

          {Array.isArray(result) &&
            result.map((image, idx) => {
              return (
                <ImageCard
                  key={`altify-image-${idx}`}
                  index={idx}
                  image={image}
                  password={password}
                  total={result?.length}
                  gptModel={gptModel}
                />
              );
            })}
        </div>
      </main>
    </div>
  );
}
