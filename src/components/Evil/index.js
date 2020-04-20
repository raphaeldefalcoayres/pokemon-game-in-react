import React from 'react';

import { Container, Character } from './styles';

export default function Evil({ x, y }) {
  return (
    <Container>
      <Character x={x} y={y} />
    </Container>
  );
}
