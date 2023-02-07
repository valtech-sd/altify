import { useState } from 'react';
import { number, object, string } from 'prop-types';

import { Azure, CloudVision } from '../../components';
import { Container, ImageContainer, ResultsContainer, Wrapper, Label, SelectStyles } from './styles';
import { FormControl, MenuItem, Select } from '@mui/material';

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
          <p style={{ height: '20px', margin: '0 0 20px 0', fontWeight: 'bold' }}>Image {index + 1}</p>
          <img src={image.image} alt="" style={{ width: '100%' }} />
          <p style={{ visibility: 'hidden', height: '20px', margin: '20px 0 0 0' }}>3</p>
        </ImageContainer>
        <ResultsContainer elevation={8}>
          <Wrapper>
            <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
              <Label>GPT Creativity Level:</Label>
              <FormControl sx={{ width: 120, marginLeft: 2 }}>
                <Select
                  labelId="creativity-select-label"
                  id="creativity-select"
                  value={creativity}
                  onChange={handleChange}
                  sx={SelectStyles}
                >
                  {options.map((option) => (
                    <MenuItem key={option.label} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div style={{ display: 'flex', flex: 2, alignItems: 'center' }}>
              <p style={{ fontWeight: 'bold', paddingLeft: 40, minWidth: 200 }}>Current Alt Tag: </p>
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
    </div>
  );
};

ImageCard.propTypes = propTypes;
ImageCard.defaultProps = defaultProps;

export default ImageCard;
