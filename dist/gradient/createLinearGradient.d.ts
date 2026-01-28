type GradientOptions = {
    direction?: string | number;
    opacity?: number;
    format?: 'css' | 'react-native';
};
export declare function createLinearGradient(colors: string[], options?: GradientOptions): string | string[];
export {};
