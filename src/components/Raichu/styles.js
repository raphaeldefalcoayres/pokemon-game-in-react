import styled, { keyframes } from 'styled-components';

const Move = keyframes`
  from { background-position-x: 0px; background-position-y: 0;}
  to { background-position-x: -128px;background-position-y: 0;}
`;

export const Container = styled.div`
  /* border: 1px solid red; */
  width: 26px;
  height: 26px;
  top: ${props => (props.y ? `${(props.y - 1) * 26}px` : '0px')};
  left: ${props => (props.x ? `${(props.x - 1) * 26}px` : '0px')};
  position: absolute;
`;
export const Character = styled.div`
  background-image: url('./assets/raichu.png');
  background-repeat: no-repeat;
  background-size: 128px;
  width: 36px;
  height: 36px;
  z-index: 9;
  margin-left: -5px;
  margin-top: -12px;
  animation: ${Move} 1s steps(3) infinite;
`;
