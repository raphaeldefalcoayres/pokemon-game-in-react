import { ed } from '~/config/constants';

export function handleNextPosition({ direction, position }) {
  switch (direction) {
    case ed.LEFT:
      return { x: position.x - 1, y: position.y };
    case ed.RIGHT:
      return { x: position.x + 1, y: position.y };
    case ed.UP:
      return { x: position.x, y: position.y - 1 };
    case ed.DOWN:
      return { x: position.x, y: position.y + 1 };
    default:
      return false;
  }
}
