import { useState } from 'react';
import { number, object, string } from 'prop-types';

import { Azure, CloudVision } from '../../components';
import { Container, ImageContainer, ResultsContainer, Wrapper } from './styles';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const propTypes = {
  image: object.isRequired,
  password: string.isRequired,
  index: number.isRequired,
  total: number.isRequired,
};

const defaultProps = {};

const options = [
  { value: '0', label: 'Light' },
  { value: '0.5', label: 'Medium' },
  { value: '1', label: 'High' },
];

const ImageCard = ({ image, password, index, total }) => {
  const [creativity, setCreativity] = useState(0);

  function handleChange(event) {
    setCreativity(event.target.value);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Container elevation={8}>
        <ImageContainer>
          <img src={image.image} alt="" style={{ width: '100%' }} />
        </ImageContainer>
        <ResultsContainer elevation={8}>
          <Wrapper>
            <div style={{ display: 'flex', flex: 2 }}>
              <FormControl fullWidth>
                <InputLabel id="creativity-select-label">GPT Creativity Level</InputLabel>
                <Select
                  labelId="creativity-select-label"
                  id="creativity-select"
                  value={creativity}
                  label="GPT Creativity Level"
                  onChange={handleChange}
                >
                  {options.map((option) => (
                    <MenuItem key={option.label} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div style={{ display: 'flex', flex: 2, alignItems: 'space-evenly' }}>
              <p style={{ fontWeight: 'bold', marginLeft: 20 }}>Current Alt Tag: </p>
            </div>
            <div style={{ display: 'flex', flex: 3, marginLeft: -80 }}>
              <p>{image.current}</p>
            </div>
          </Wrapper>
          <Wrapper>
            <Azure src={image} password={password} creativity={creativity} />
          </Wrapper>
          <Wrapper>
            <CloudVision src={image} password={password} creativity={creativity} />
          </Wrapper>
        </ResultsContainer>
      </Container>
      <p>
        #{index + 1}/{total}
      </p>
    </div>
  );
};

ImageCard.propTypes = propTypes;
ImageCard.defaultProps = defaultProps;

export default ImageCard;
