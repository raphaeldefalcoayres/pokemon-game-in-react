import styled from 'styled-components';

export const Container = styled.div`
  background-image: url('./assets/board1.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  width: 548px;
  height: 629px;
  margin: auto auto;
  overflow: hidden;
  position: relative;
  border: 1px solid red;
`;

export const Area = styled.div`
  border: 1px solid blue;
  width: calc(100% - 18px);
  position: relative;
  height: calc(100% - 100px);
  margin-top: 65px;
  margin-left: 8px;
`;
