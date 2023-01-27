import { object } from 'prop-types';
import { useState } from 'react';
import { AltText, Azure, CloudVision } from '../../components';
import { SelectDropdown, DropdownLabel, SelectDropdownContainer } from './styles';

const propTypes = {
  results: object,
};

const ImageCard = ({ image, password, index }) => {
  const [creativity, setCreativity] = useState(0);

  return (
    <div style={{ marginTop: 5 }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <img src={image.image} alt="" style={{ width: '100%' }} />
        <AltText altText={image.current} index={index + 1} />
        <DropdownLabel>Creativity:</DropdownLabel>
        <SelectDropdownContainer>
          <SelectDropdown name="creativity" id="creativity" onChange={(e) => setCreativity(e.target.value)}>
            <option value="0">Light</option>
            <option value="0.5">Medium</option>
            <option value="1">High</option>
          </SelectDropdown>
        </SelectDropdownContainer>

        <Azure src={image} password={password} creativity={creativity} />
        <CloudVision src={image} password={password} creativity={creativity} />
      </div>
    </div>
  );
};

ImageCard.propTypes = propTypes;

export default ImageCard;
