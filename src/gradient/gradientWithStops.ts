import { clamp } from "../utils/clamp";

export function gradientWithStops(
  colors: string[],
  stops: number[],
  direction: string = 'to bottom',
  format: 'css' | 'react-native' = 'css'
): string | string[] {
  if (
    !Array.isArray(colors) ||
    !Array.isArray(stops) ||
    colors.length !== stops.length ||
    colors.length < 2
  ) {
    return format === 'react-native' ? [] : '';
  }

  if (format === 'react-native') {
    return colors;
  }

  const parts = colors.map((color, index) => {
    const stop = clamp(stops[index], 0, 100);
    return `${color} ${stop}%`;
  });

  return `linear-gradient(${direction}, ${parts.join(', ')})`;
}
