import { parseColor } from '../utils/parseColor';
import { clamp } from '../utils/clamp';

export const adjustOpacity = (
  color: string,
  opacity: number
): string => {
  try {
    const { r, g, b } = parseColor(color);
    const alpha = opacity > 1 ? clamp(opacity / 100) : clamp(opacity);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  } catch {
    return color;
  }
};
