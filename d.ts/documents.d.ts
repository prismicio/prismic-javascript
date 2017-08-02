export declare class Document {
    id: string;
    uid?: string;
    type: string;
    href: string;
    tags: string[];
    slug: string;
    slugs: string[];
    lang?: string;
    alternateLanguages: string[];
    firstPublicationDate: Date | null;
    lastPublicationDate: Date | null;
    data: any;
    constructor(id: string, type: string, href: string, tags: string[], slug: string, slugs: string[], alternateLanguages: string[], firstPublicationDate: string | null, lastPublicationDate: string | null, data: any, uid?: string, lang?: string);
}
