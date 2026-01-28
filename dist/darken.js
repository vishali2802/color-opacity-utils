"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.darken = void 0;
const parseColor_1 = require("./utils/parseColor");
const clamp_1 = require("./utils/clamp");
const darken = (color, percent) => {
    const { r, g, b, a } = (0, parseColor_1.parseColor)(color);
    const factor = (0, clamp_1.clamp)(percent / 100);
    const newR = Math.round(r * (1 - factor));
    const newG = Math.round(g * (1 - factor));
    const newB = Math.round(b * (1 - factor));
    return `rgba(${newR}, ${newG}, ${newB}, ${a})`;
};
exports.darken = darken;
