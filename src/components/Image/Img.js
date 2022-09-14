import styled from 'styled-components';

const Image = styled.img`
  display: block;
  max-width: 100%;
`;

const Img = ({ alt, src }) => (
  <Image
    src={src}
    alt={alt}
  />
)

export default Img;
