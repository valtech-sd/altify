import { Bold, Paragraph } from '../../styles/globalStyles';
import { Container } from './styles';

const AltText = ({ altText, index, src }) => {
  return (
    <Container>
      <Paragraph>
        <Bold>#{index}: Current Alt Tag: </Bold>
        <p>{altText}</p>
      </Paragraph>
      <a style={{ wordBreak: 'break-all' }} href={src} target="_blank" rel="noreferrer">
        {src}
      </a>
    </Container>
  );
};

export default AltText;
