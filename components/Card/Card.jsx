import { func, string, bool } from 'prop-types';
import { Bold, Paragraph } from '../../styles/globalStyles';

import Button from '../Button';
import { Container, Header } from './styles';

const propTypes = {
  onClick: func.isRequired,
  header: string.isRequired,
  fetched: bool.isRequired,
  suggestion: string,
  chatGTP: string,
};

const defaultProps = {
  suggestion: '',
  chatGTP: '',
};

const Card = ({ onClick, header, fetched, suggestion, chatGTP, altText }) => {
  return (
    <div style={{ marginTop: 5 }}>
      {!fetched ? (
        <Button onClick={onClick} header={header} />
      ) : (
        <Container>
          <Header>{header}</Header>
          <Paragraph>
            <Bold>Suggested: </Bold>
            {suggestion || <span className="loading-bar small"></span>}
          </Paragraph>
          <Paragraph>
            <Bold>GPT Suggestion: </Bold>
            {chatGTP || <span className="loading-bar small"></span>}
          </Paragraph>
        </Container>
      )}
    </div>
  );
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;