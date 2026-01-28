"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clamp = void 0;
const clamp = (value, min = 0, max = 1) => Math.min(Math.max(value, min), max);
exports.clamp = clamp;
