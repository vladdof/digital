import styled from 'styled-components';

const Container = styled.div`
  background-color: ${({ bgColor = '#fff' }) => bgColor}
`;

export default Container;
