import { parseColor } from '../utils/parseColor';
import { clamp } from '../utils/clamp';

export const lighten = (color: string, percent: number) => {
  const { r, g, b, a } = parseColor(color);
  const factor = clamp(percent / 100);

  const newR = Math.round(r + (255 - r) * factor);
  const newG = Math.round(g + (255 - g) * factor);
  const newB = Math.round(b + (255 - b) * factor);

  return `rgba(${newR}, ${newG}, ${newB}, ${a})`;
};
