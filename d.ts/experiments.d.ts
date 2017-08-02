export interface Variation {
    id: string;
    ref: string;
    label: string;
}
export interface Experiment {
    id: string;
    googleId: string;
    name: string;
    variations: Variation[];
}
export declare class Experiments {
    drafts: Experiment[];
    running: Experiment[];
    constructor(data: any);
    current(): Experiment | null;
    refFromCookie(cookie: string): string | null;
}
