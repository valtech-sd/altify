import { func, string, bool } from 'prop-types';

import Button from '../Button';
import { Container, TagLabel } from './styles';

const propTypes = {
  chatGTP: string,
  header: string.isRequired,
  loading: bool,
  onClick: func.isRequired,
  suggestion: string,
  unsupported: bool,
};

const defaultProps = {
  chatGTP: null,
  loading: false,
  suggestion: null,
  unsupported: false,
};

const Card = ({ onClick, header, suggestion, chatGTP, loading, unsupported }) => {
  return (
    <Container>
      <div style={{ flex: 1 }}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <Button disabled={unsupported} onClick={onClick} header={`(${header})`} loading={loading} />
            {unsupported && (
              <div style={{ color: 'red', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <p style={{ fontSize: 12, margin: 0 }}>Unsupported format: .GIF</p>
              </div>
            )}
          </div>
          <div style={{ flex: 2, flexDirection: 'column', display: 'flex' }}>
            <div style={{ flex: 2, alignItems: 'center', display: 'flex' }}>
              <TagLabel>{header} Tag:&nbsp;</TagLabel>
              {suggestion && <p>{suggestion}</p>}
            </div>
            {chatGTP && (
              <div style={{ flex: 2, alignItems: 'center', display: 'flex' }}>
                <TagLabel>GPT Tag:&nbsp;</TagLabel>
                {chatGTP && <p>{chatGTP}</p>}
              </div>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
