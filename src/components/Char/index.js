import React from 'react';

import { Container, Character } from './styles';
import useCharMoviment from '../hooks/useCharMoviment';

export default function Char() {
  const { position, direction } = useCharMoviment({ x: 11, y: 20 });

  return (
    <Container>
      <Character position={position} direction={direction} />
    </Container>
  );
}
