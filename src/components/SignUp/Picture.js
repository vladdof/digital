import styled from 'styled-components';

import MainPicture from 'components/Image/Picture';
import signUp from './sign-up.jpg';
import signUp2x from './sign-up-2x.jpg';

const Wrapper = styled.div`
  position: absolute;
  max-width: 700px;
  width: 100%;
  bottom: 0;
`;

const Picture = () => (
  <Wrapper>
    <MainPicture alt="sign up" src={signUp} srcSet={signUp2x} />
  </Wrapper>
);

export default Picture;
