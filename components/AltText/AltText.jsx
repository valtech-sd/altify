import { Bold, Paragraph } from '../../styles/globalStyles';
import { Container } from './styles';

const AltText = ({ altText }) => {
  return (
    <Container>
      <Paragraph>
        <Bold>Current Alt Tag: </Bold>
        {altText}
      </Paragraph>
    </Container>
  );
};

export default AltText;
