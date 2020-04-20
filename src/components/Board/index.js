import React from 'react';

import { Container, Area } from './styles';
import Char from '../Char';
import Evil from '../Evil';
import Raichu from '../Raichu';

export default function Board() {
  return (
    <Container>
      <Area>
        <Char />
        <Evil x={1} y={10} />
        <Evil x={1} y={7} />
        <Evil x={10} y={6} />
        <Evil x={5} y={2} />
        <Evil x={5} y={15} />
        <Evil x={11} y={15} />
        <Raichu x={5} y={10} />
      </Area>
    </Container>
  );
}
