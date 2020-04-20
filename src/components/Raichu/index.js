import React from 'react';

import { Container, Character } from './styles';

export default function Raichu({ x, y }) {
  return (
    <Container x={x} y={y}>
      <Character />
    </Container>
  );
}
