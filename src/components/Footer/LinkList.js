import styled from 'styled-components';
import Link from 'components/Link';
import stylesFlex from 'components/stylesFlex';

const linkNames = [
  'Privacy Policy',
  'Terms of Conditions',
  'Legal',
  'Help',
];

const Wrapper = styled.ul`
  ${stylesFlex};
  column-gap: 15px;
  margin-bottom: 1rem;
`;

const LinkList = () => (
  <Wrapper justify="center" align="center">
    {linkNames.map((link) =>
      <li key={link}>
        <Link
          text={link}
          weight="400"
          color="#767676"
          hoverDecoration="underline"
        />
      </li>
    )}
  </Wrapper>
);

export default LinkList;
