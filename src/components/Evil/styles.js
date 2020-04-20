import styled, { keyframes } from 'styled-components';

const Move = keyframes`
  from { background-position-x: -2px; background-position-y: 2px;}
  to { background-position-x: -100px;background-position-y: 2px;}
`;

export const Container = styled.div``;
export const Character = styled.div`
  background-image: url('./assets/carvine.png');
  background-repeat: no-repeat;
  background-size: 100px;
  width: 30px;
  height: 30px;
  position: absolute;
  top: ${props => (props.y ? `${(props.y - 1) * 26}px` : '0px')};
  left: ${props => (props.x ? `${(props.x - 1) * 26}px` : '0px')};
  animation: ${Move} 1s steps(3) infinite;
`;
