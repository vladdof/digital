import styled from 'styled-components';

import stylesFlex from 'components/stylesFlex';
import Button from 'components/Button';
import Text from 'components/Text/Text';

const TermsWrap = styled.div`
  ${stylesFlex};
  column-gap: 20px;
  margin-top: 60px;
  width: 80%;
`;

const Terms = () => (
  <TermsWrap align="center">
    <Button
      size="18"
      width="112"
      height="56"
      weight="600"
    >
      Sign Up
    </Button>
    <Text weight="400">
      By signing up you agree with our Terms of Conditions and Privacy Policy rules
    </Text>
  </TermsWrap>
);

export default Terms;
