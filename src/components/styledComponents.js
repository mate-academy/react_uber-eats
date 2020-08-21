import styled from 'styled-components';

export const Circle = styled.button`
  width: ${props => props.size || '50px'};
  height: ${props => props.size || '50px'};
  font-size: 40px;
  line-height: 1;
  border-radius: 50%;
  background-color: ${props => props.theme.backgroundGrey};
`;
