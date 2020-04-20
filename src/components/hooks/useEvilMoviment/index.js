import useInterval from '@use-it/interval';
import { useState } from 'react';
import { ed } from '~/config/constants';
import { handleNextPosition } from '~/contexts/canvas/helpers';

function useEvilMoviment(initialState) {
  const [position, setPosition] = useState(initialState);
  const [direction, setDirection] = useState(null);

  useInterval(() => {
    const random = Math.floor(Math.random() * 4);
    const directions = Object.values(ed);
    const randomDirection = directions[random];

    const newPosition = handleNextPosition({
      direction: randomDirection,
      position,
    });

    setPosition(newPosition);
    setDirection(randomDirection);
  }, 2000);

  return {
    position,
    direction,
  };
}

export default useEvilMoviment;
