import styled, { keyframes } from 'styled-components';

const CharWalkRight = keyframes`
  from { background-position-x: 0; background-position-y: -85px;}
  to { background-position-x: -128px;background-position-y: -85px;}
`;

const CharWalkLeft = keyframes`
  from { background-position-x: 0; background-position-y: -40px;}
  to { background-position-x: -128px;background-position-y: -40px;}
`;

const CharWalkTop = keyframes`
  from { background-position-x: 0; background-position-y: -128px;}
  to { background-position-x: -128px;background-position-y: -128px;}
`;

const CharWalkBottom = keyframes`
  from { background-position-x: 0px; background-position-y: 0;}
  to { background-position-x: -128px;background-position-y: 0;}
`;

const directionAnimation = direction => {
  if (direction === 'ArrowUp') {
    return CharWalkTop;
  }
  if (direction === 'ArrowDown') {
    return CharWalkBottom;
  }
  if (direction === 'ArrowLeft') {
    return CharWalkLeft;
  }
  if (direction === 'ArrowRight') {
    return CharWalkRight;
  }

  return false;
};

export const Container = styled.div`
  /* border: 1px solid red; */
  width: 26px;
  height: 26px;
  top: ${props =>
    props.position.y ? `${(props.position.y - 1) * 26}px` : '0px'};
  left: ${props =>
    props.position.x ? `${(props.position.x - 1) * 26}px` : '0px'};

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
  animation: ${props => directionAnimation(props.direction)} 1.5s infinite
    steps(3);
`;
