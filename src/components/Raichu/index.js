import React from 'react';

import { Container, Character } from './styles';
import useEvilMoviment from '../hooks/useEvilMoviment';

export default function Raichu({ x, y }) {
  const { position, direction } = useEvilMoviment({ x, y });

  return (
    <Container position={position}>
      <Character direction={direction} />
    </Container>
  );
}
