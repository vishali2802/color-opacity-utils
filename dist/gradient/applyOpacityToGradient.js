"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyOpacityToGradient = applyOpacityToGradient;
const adjustOpacity_1 = require("../opacity/adjustOpacity");
function applyOpacityToGradient(colors, opacity) {
    if (!Array.isArray(colors) || colors.length === 0) {
        return [];
    }
    return colors.map(color => (0, adjustOpacity_1.adjustOpacity)(color, opacity));
}
