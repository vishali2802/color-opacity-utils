import { parseColor } from '../utils/parseColor';
import { clamp } from '../utils/clamp';

export const darken = (color: string, percent: number) => {
  const { r, g, b, a } = parseColor(color);
  const factor = clamp(percent / 100);

  const newR = Math.round(r * (1 - factor));
  const newG = Math.round(g * (1 - factor));
  const newB = Math.round(b * (1 - factor));

  return `rgba(${newR}, ${newG}, ${newB}, ${a})`;
};
