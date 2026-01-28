"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.overlay = void 0;
const adjustOpacity_1 = require("./opacity/adjustOpacity");
const overlay = (color = '#000', opacity = 40) => (0, adjustOpacity_1.adjustOpacity)(color, opacity);
exports.overlay = overlay;
