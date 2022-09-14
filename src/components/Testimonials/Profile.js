import styled from 'styled-components';

import stylesFlex from 'components/stylesFlex';
import Text from 'components/Text/Text';
import Icons from 'components/Icons';
import Circle from 'components/Circle';
import ProfileName from './ProfileName';

const Wrapper = styled.div`
  ${stylesFlex};
  column-gap: 18px;
`;

const TextWrapper = styled.div`
  ${stylesFlex};
`;

const Profile = ({ position, name }) => (
  <Wrapper>
    <Circle justify="center" align="center">
      <Icons name="user" size="16" color="#27A759" />
    </Circle>
    <TextWrapper direction="column">
      <ProfileName weight="500">{name}</ProfileName>
      <Text color="#767676" weight="400">{position}</Text>
    </TextWrapper>
  </Wrapper>
);

export default Profile;
