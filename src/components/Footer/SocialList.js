import styled from 'styled-components';

import Icons from 'components/Icons';
import stylesFlex from 'components/stylesFlex';
import A from './A';

const socialNames = [
  'facebook',
  'twitter',
  'linkedin',
  'google',
];

const Wrapper = styled.div`
  ${stylesFlex};
  column-gap: 15px;
`;

const SocialList = () => (
  <Wrapper>
    {socialNames.map(name =>
      <A
        key={name}
        href="#"
        target="_blank"
      >
        <Icons
          name={name}
          size={name === 'google' ? '20' : '24'}
        />
      </A>
    )}
  </Wrapper>
);

export default SocialList;
