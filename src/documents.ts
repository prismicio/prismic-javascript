export interface Document<T> {
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
  data: T;
}
