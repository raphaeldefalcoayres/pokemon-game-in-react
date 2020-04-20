import React, { useState, useEffect, useCallback } from 'react';

import { Container, Character } from './styles';

export default function Char() {
  const [position, setPosition] = useState({ x: 11, y: 0 });
  const [direction, setDirection] = useState(null);

  const handleMoviment = useCallback(e => {
    console.log(e.key);

    if (e.key === 'ArrowLeft') {
      setPosition({ x: position.x - 1, y: position.y });
      setDirection('left');
    } else if (e.key === 'ArrowRight') {
      setPosition({ x: position.x + 1, y: position.y });
      setDirection('right');
    } else if (e.key === 'ArrowDown') {
      setPosition({ x: position.x, y: position.y - 1 });
      setDirection('bottom');
    } else if (e.key === 'ArrowUp') {
      setPosition({ x: position.x, y: position.y + 1 });
      setDirection('top');
    }
  });

  useEffect(() => {
    document.addEventListener('keydown', handleMoviment);
    return () => {
      document.removeEventListener('keydown', handleMoviment);
    };
  }, [handleMoviment]);

  return (
    <Container>
      <Character position={position} direction={direction} />
    </Container>
  );
}
