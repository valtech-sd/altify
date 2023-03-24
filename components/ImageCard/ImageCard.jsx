import { useState } from 'react';
import { number, object, string } from 'prop-types';

import { Azure } from '../../components';
import { Container, ImageContainer, ResultsContainer, Wrapper } from './styles';

const propTypes = {
  image: object.isRequired,
  password: string.isRequired,
  index: number.isRequired,
  total: number.isRequired,
};

const defaultProps = {};

const ImageCard = ({ image, password, index, gptModel }) => {
  const [creativity, setCreativity] = useState(0);

  function handleChange(event) {
    setCreativity(event.target.value);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Container elevation={8}>
        <ImageContainer>
          <div style={{ margin: '0 0 20px 0', fontWeight: 'bold' }}>Image {index + 1}</div>
          <img src={image.image} alt="Broken image on source site." style={{ width: '100%', borderRadius: '6px' }} />
          <p style={{ visibility: 'hidden', height: '20px', margin: '20px 0 0 0' }}>3</p>
        </ImageContainer>
        <ResultsContainer elevation={8}>
          <Wrapper>
            <div style={{ display: 'flex', flex: '2 1 0%', flexDirection: 'column', padding: '20px' }}>
              <div style={{ fontWeight: 'bold', minWidth: 200, padding: '0 0 20px 0', margin: 0 }}>Current Alt Tag</div>
              <div style={{ padding: 0 }}>{image.current}</div>
            </div>
          </Wrapper>
          <Wrapper>
            <Azure
              index={index}
              src={image}
              password={password}
              creativity={creativity}
              handleChange={handleChange}
              gptModel={gptModel}
            />
          </Wrapper>
        </ResultsContainer>
      </Container>
    </div>
  );
};

ImageCard.propTypes = propTypes;
ImageCard.defaultProps = defaultProps;

export default ImageCard;
