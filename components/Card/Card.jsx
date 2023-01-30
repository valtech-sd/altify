import { func, string, bool } from 'prop-types';

import Button from '../Button';
import { Container, Header, Wrapper } from './styles';

const propTypes = {
  onClick: func.isRequired,
  header: string.isRequired,
  suggestion: string,
  chatGTP: string,
};

const defaultProps = {
  suggestion: '',
  chatGTP: '',
};

const Card = ({ onClick, header, suggestion, chatGTP, loadingSuggestion, loadingChatGPT }) => {
  return (
    <Container>
      <Button onClick={onClick} header={header} />
      <div style={{ marginLeft: 50 }}>
        <Wrapper>
          <p style={{ fontWeight: 'bold', minWidth: '150px' }}>{header} Suggestion:&nbsp;</p>
          {loadingSuggestion && <span className="loading-bar small"></span>}
          {suggestion && <p>{suggestion}</p>}
        </Wrapper>
        <Wrapper>
          <p style={{ fontWeight: 'bold', minWidth: '150px' }}>GPT Suggestion:&nbsp;</p>
          {loadingChatGPT && <span className="loading-bar small"></span>}
          {chatGTP && <p>{chatGTP}</p>}
        </Wrapper>
      </div>
    </Container>
  );
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
