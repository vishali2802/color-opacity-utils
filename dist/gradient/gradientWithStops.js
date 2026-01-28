"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gradientWithStops = gradientWithStops;
const clamp_1 = require("../utils/clamp");
function gradientWithStops(colors, stops, direction = 'to bottom', format = 'css') {
    if (!Array.isArray(colors) ||
        !Array.isArray(stops) ||
        colors.length !== stops.length ||
        colors.length < 2) {
        return format === 'react-native' ? [] : '';
    }
    if (format === 'react-native') {
        return colors;
    }
    const parts = colors.map((color, index) => {
        const stop = (0, clamp_1.clamp)(stops[index], 0, 100);
        return `${color} ${stop}%`;
    });
    return `linear-gradient(${direction}, ${parts.join(', ')})`;
}
