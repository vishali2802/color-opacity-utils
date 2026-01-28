"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adjustOpacity = void 0;
const parseColor_1 = require("../utils/parseColor");
const clamp_1 = require("../utils/clamp");
const adjustOpacity = (color, opacity) => {
    try {
        const { r, g, b } = (0, parseColor_1.parseColor)(color);
        const alpha = opacity > 1 ? (0, clamp_1.clamp)(opacity / 100) : (0, clamp_1.clamp)(opacity);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
    catch (_a) {
        return color;
    }
};
exports.adjustOpacity = adjustOpacity;
