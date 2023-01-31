import { func, string, bool } from 'prop-types';

import Button from '../Button';
import { Container, Header, Wrapper } from './styles';

const propTypes = {
  onClick: func.isRequired,
  header: string.isRequired,
  suggestion: string,
  chatGTP: string,
  loading: bool.isRequired,
};

const defaultProps = {
  suggestion: null,
  chatGTP: null,
};

const Card = ({ onClick, header, suggestion, chatGTP, loading }) => {
  return (
    <Container>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', flex: 1 }}>
          <div style={{ flex: 2 }}>
            <Button onClick={onClick} header={header} loading={loading} />
          </div>
          <div style={{ flex: 2 }}>
            <p style={{ fontWeight: 'bold', marginTop: 0, marginBottom: 50, marginLeft: 20 }}>{header} Tag:&nbsp;</p>
          </div>
          <div style={{ flex: 3, marginLeft: -80 }}>
            <div style={{ flex: 5 }}>{suggestion && <p style={{ marginTop: 0 }}>{suggestion}</p>}</div>
          </div>
        </div>
        <div style={{ flex: 1, display: 'flex' }}>
          <div style={{ flex: 2 }} />
          <div style={{ flex: 2 }}>
            <div>
              <p style={{ fontWeight: 'bold', marginLeft: 20, marginTop: 0 }}>GPT Tag:&nbsp;</p>
            </div>
          </div>
          <div style={{ flex: 3, marginLeft: -80}}>
            <div style={{ minHeight: 150, maxHeight: 150, overflowY: 'auto' }}>{chatGTP && <p style={{ marginTop: 0 }}>{chatGTP}</p>}</div>
          </div>
        </div>
      </div>
    </Container>
  );
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
