import { parseColor } from '../utils/parseColor';
import { clamp } from '../utils/clamp';

export function getGradientColors(
  color: string,
  steps: number
): string[] {
  const parsed = parseColor(color);
  if (!parsed || steps < 2) return [color];

  const stepsCount = clamp(steps, 2, 20);
  const colors: string[] = [];

  for (let i = 0; i < stepsCount; i++) {
    const factor = i / (stepsCount - 1);

    const r = Math.round(parsed.r + (255 - parsed.r) * factor);
    const g = Math.round(parsed.g + (255 - parsed.g) * factor);
    const b = Math.round(parsed.b + (255 - parsed.b) * factor);

    colors.push(`rgb(${r}, ${g}, ${b})`);
  }

  return colors;
}
