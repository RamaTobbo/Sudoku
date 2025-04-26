import { NUMBERS, SQUARE } from '../../../typings'

interface IInput {
  square: SQUARE
  value: NUMBERS
}

/**
 * 
 * @param input Object with 3X# Square and value.
 */
function isInSquare({ square, value }: IInput): boolean {
  return [...square[0], ...square[1], ...square[2]].includes(value)
}

export default isInSquare
