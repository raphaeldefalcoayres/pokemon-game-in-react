import { useState, useEffect } from 'react';
import { handleNextPosition } from '~/contexts/canvas/helpers';

function useCharMoviment(initialState) {
  const [position, setPosition] = useState(initialState);
  const [direction, setDirection] = useState(null);

  useEffect(() => {
    const handleCharMoviment = e => {
      const directionKey = e.key;
      const newPosition = handleNextPosition({
        direction: directionKey,
        position,
      });

      setPosition(newPosition);
      setDirection(directionKey);
    };

    document.addEventListener('keydown', handleCharMoviment);
    return () => {
      document.removeEventListener('keydown', handleCharMoviment);
    };
  }, [position]);

  return {
    position,
    direction,
  };
}

export default useCharMoviment;
