"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseColor = void 0;
const parseColor = (color) => {
    if (color.startsWith('#')) {
        const hex = color.replace('#', '');
        const bigint = hex.length === 3
            ? Number.parseInt(hex.split('').map(c => c + c).join(''), 16)
            : Number.parseInt(hex, 16);
        return {
            r: (bigint >> 16) & 255,
            g: (bigint >> 8) & 255,
            b: bigint & 255,
            a: 1
        };
    }
    if (color.startsWith('rgb')) {
        const values = color.match(/[\d.]+/g);
        if (!values)
            throw new Error('Invalid color');
        return {
            r: Number(values[0]),
            g: Number(values[1]),
            b: Number(values[2]),
            a: values[3] ? Number(values[3]) : 1
        };
    }
    throw new Error('Unsupported color format');
};
exports.parseColor = parseColor;
