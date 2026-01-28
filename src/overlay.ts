import { adjustOpacity } from './opacity/adjustOpacity';

export const overlay = (color = '#000', opacity = 40) =>
  adjustOpacity(color, opacity);
