const {
  darken,
  lighten,
  adjustOpacity,
  applyOpacityToGradient,
  createLinearGradient,
  getGradientColors,
  gradientWithStops,
} = require('../dist'); // or '../dist/index.js'

console.log('--- DARKEN ---');
console.log(darken('#FF0000', 50));

console.log('--- LIGHTEN ---');
console.log(lighten('#000000', 50));

console.log('--- OPACITY ---');
console.log(adjustOpacity('#00FF00', 0.3));

console.log('--- GRADIENT ARRAY ---');
console.log(
  applyOpacityToGradient(['#FF0000', '#0000FF'], 0.5)
);

console.log('--- CSS GRADIENT ---');
console.log(
  createLinearGradient(['red', 'blue'], {
    direction: 'to right',
    opacity: 0.4,
  })
);

console.log('--- STOPS ---');
console.log(
  gradientWithStops(['red', 'blue'], [20, 80])
);
