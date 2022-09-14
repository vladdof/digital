import styled from 'styled-components';

import Container from 'components/Container';
import Picture from './Picture';
import SignUpWrapper from './SignUpWrapper';
import Description from './Description';
import Form from './Form';
import Terms from './Terms';

const ContentWrap = styled.div`
  width: 50%;
`;

export default function SignUp() {
  return (
    <Container bgColor="#F5F5F5">
      <SignUpWrapper>
        <ContentWrap>
          <Description />
          <Form />
          <Terms />
        </ContentWrap>
        <ContentWrap>
          <Picture />
        </ContentWrap>
      </SignUpWrapper>
    </Container>
  );
}
