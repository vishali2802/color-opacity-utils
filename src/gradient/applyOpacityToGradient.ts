import { adjustOpacity } from '../opacity/adjustOpacity';
export function applyOpacityToGradient(
  colors: string[] | null,
  opacity: number
): string[] {
  if (!Array.isArray(colors) || colors.length === 0) {
    return [];
  }

  return colors.map(color => adjustOpacity(color, opacity));
}
