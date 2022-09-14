import styled from 'styled-components';
import MainIcons from 'components/Icons';

const IconsWrapper = styled.div`
  position: absolute;
  top: calc(50% - ${({ size }) => size}px / 2);
  right: 18px;
`;

export default function Icons(props) {
  return (
    <IconsWrapper {...props}>
      <MainIcons {...props} />
    </IconsWrapper>
  );
}
