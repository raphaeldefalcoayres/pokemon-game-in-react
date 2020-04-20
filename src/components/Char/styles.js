import styled, { keyframes } from 'styled-components';

const CharWalkRight = keyframes`
  from { background-position-x: 0; background-position-y: -75px;}
  to { background-position-x: -140px;background-position-y: -73px;}
`;

const CharWalkLeft = keyframes`
  from { background-position-x: 0; background-position-y: -39px;}
  to { background-position-x: -140px;background-position-y: -37px;}
`;

const CharWalkTop = keyframes`
  from { background-position-x: 0; background-position-y: -112px;}
  to { background-position-x: -140px;background-position-y: -111px;}
`;

const CharWalkBottom = keyframes`
  from { background-position-x: 0; background-position-y: -5px;}
  to { background-position-x: -140px;background-position-y: -3px;}
`;

const directionAnimation = direction => {
  if (direction === 'top') {
    return CharWalkTop;
  }
  if (direction === 'bottom') {
    return CharWalkBottom;
  }
  if (direction === 'left') {
    return CharWalkLeft;
  }
  if (direction === 'right') {
    return CharWalkRight;
  }

  return false;
};

export const Container = styled.div``;
export const Character = styled.div`
  background-image: url('./assets/char1.png');
  background-repeat: no-repeat;
  background-size: 140px;
  width: 30px;
  height: 37px;
  background-position-x: 0px;
  background-position-y: -112px;
  position: absolute;
  bottom: ${props =>
    props.position.y ? `${(props.position.y - 1) * 26}px` : '0px'};
  left: ${props =>
    props.position.x ? `${(props.position.x - 1) * 26}px` : '0px'};
  animation: ${props => directionAnimation(props.direction)} 0.5s infinite
    steps(4);
  z-index: 1;
`;
