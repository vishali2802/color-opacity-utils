"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGradientColors = getGradientColors;
const parseColor_1 = require("../utils/parseColor");
const clamp_1 = require("../utils/clamp");
function getGradientColors(color, steps) {
    const parsed = (0, parseColor_1.parseColor)(color);
    if (!parsed || steps < 2)
        return [color];
    const stepsCount = (0, clamp_1.clamp)(steps, 2, 20);
    const colors = [];
    for (let i = 0; i < stepsCount; i++) {
        const factor = i / (stepsCount - 1);
        const r = Math.round(parsed.r + (255 - parsed.r) * factor);
        const g = Math.round(parsed.g + (255 - parsed.g) * factor);
        const b = Math.round(parsed.b + (255 - parsed.b) * factor);
        colors.push(`rgb(${r}, ${g}, ${b})`);
    }
    return colors;
}
