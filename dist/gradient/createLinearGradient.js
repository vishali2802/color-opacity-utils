"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLinearGradient = createLinearGradient;
const clamp_1 = require("../utils/clamp");
const applyOpacityToGradient_1 = require("./applyOpacityToGradient");
function createLinearGradient(colors, options = {}) {
    if (!Array.isArray(colors) || colors.length < 2) {
        return options.format === 'react-native' ? [] : '';
    }
    const { direction = 'to bottom', opacity, format = 'css', } = options;
    const finalColors = typeof opacity === 'number'
        ? (0, applyOpacityToGradient_1.applyOpacityToGradient)(colors, (0, clamp_1.clamp)(opacity))
        : colors;
    if (format === 'react-native') {
        return finalColors;
    }
    return `linear-gradient(${direction}, ${finalColors.join(', ')})`;
}
