import styled from 'styled-components';

const Card = styled.li`
  width: 100%;
  padding: ${({ padding = '2.5' }) => padding}rem;
  border: 2px solid #D2D2D2;
  border-radius: 15px;
`;

export default Card;
