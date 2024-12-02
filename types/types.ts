interface Bounds {
    origin: {
        x: number;
        y: number;
    };
    size: {
        height: number;
        width: number;
    };
}

interface CornerPoint {
    x: number;
    y: number;
}

export interface QRData {
    bounds: Bounds;
    cornerPoints: CornerPoint[];
    data: string;
    target: number;
    type: string;
}

export interface ParsedData {
    email: string;
}

export type RootStackParamList = {
    index: undefined;
    details: undefined;
    qrscreen: undefined;
};