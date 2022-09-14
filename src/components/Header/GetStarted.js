import styled from 'styled-components';

import stylesFlex from 'components/stylesFlex';
import Button from 'components/Button';

const Wrapper = styled.div`
  ${stylesFlex};
  column-gap: 28px;
  position: absolute;
  right: 50px;
`;

const GetStarted = () => (
  <Wrapper align="center">
    <div>Sign In</div>
    <Button
      size="14"
      width="89"
    >
      Sign Up
    </Button>
  </Wrapper>
)

export default GetStarted;
