import { useState } from 'react';
import { object } from 'prop-types';

import { AltText, Azure, CloudVision } from '../../components';
import { Container, Content, ImageContainer, ResultsContainer, Wrapper } from './styles';
import { FormControl, InputLabel, MenuItem, Select, unstable_getUnit } from '@mui/material';

const propTypes = {
  results: object,
};

const options = [
  { value: '0', label: 'Light' },
  { value: '0.5', label: 'Medium' },
  { value: '1', label: 'High' },
];

const ImageCard = ({ image, password, index }) => {
  const [creativity, setCreativity] = useState(0);

  function handleChange(event) {
    setCreativity(event.target.value);
  }

  return (
    <Container>
      <ImageContainer>
        <img src={image.image} alt="" style={{ width: '100%' }} />
      </ImageContainer>
      <ResultsContainer>
        <Wrapper>
          <Content>
            <FormControl sx={{ width: '200px' }}>
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
          </Content>
          <Content width="150px" marginLeft="50px">
            <p style={{ fontWeight: 'bold' }}>Current Alt Tag: </p>
          </Content>
          <Content>
            <p>{image.current}</p>
          </Content>
        </Wrapper>
        <Wrapper>
          <Azure src={image} password={password} creativity={creativity} />
        </Wrapper>
        <Wrapper>
          <CloudVision src={image} password={password} creativity={creativity} />
        </Wrapper>
      </ResultsContainer>
    </Container>
  );
};

ImageCard.propTypes = propTypes;

export default ImageCard;
