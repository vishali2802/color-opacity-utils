import { clamp } from '../utils/clamp';
import { applyOpacityToGradient } from './applyOpacityToGradient';

type GradientOptions = {
  direction?: string | number;
  opacity?: number;
  format?: 'css' | 'react-native';
};

export function createLinearGradient(
  colors: string[],
  options: GradientOptions = {}
): string | string[] {
  if (!Array.isArray(colors) || colors.length < 2) {
    return options.format === 'react-native' ? [] : '';
  }

  const {
    direction = 'to bottom',
    opacity,
    format = 'css',
  } = options;

  const finalColors =
    typeof opacity === 'number'
      ? applyOpacityToGradient(colors, clamp(opacity))
      : colors;

  if (format === 'react-native') {
    return finalColors;
  }

  return `linear-gradient(${direction}, ${finalColors.join(', ')})`;
}
