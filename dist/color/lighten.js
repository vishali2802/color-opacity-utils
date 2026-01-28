"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lighten = void 0;
const parseColor_1 = require("../utils/parseColor");
const clamp_1 = require("../utils/clamp");
const lighten = (color, percent) => {
    const { r, g, b, a } = (0, parseColor_1.parseColor)(color);
    const factor = (0, clamp_1.clamp)(percent / 100);
    const newR = Math.round(r + (255 - r) * factor);
    const newG = Math.round(g + (255 - g) * factor);
    const newB = Math.round(b + (255 - b) * factor);
    return `rgba(${newR}, ${newG}, ${newB}, ${a})`;
};
exports.lighten = lighten;
