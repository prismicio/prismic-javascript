export interface Ref {
  ref: string
  label: string
  isMasterRef: boolean
  scheduledAt?: string
  id: string
}

export interface Language {
  id: string
  name: string
}

export interface Document<Data = Record<string, unknown>> {
  id: string
  uid?: string
  url?: string
  type: string
  href: string
  tags: string[]
  slugs: string[]
  lang?: string
  alternate_languages: AlternateLanguage[]
  first_publication_date: string | null
  last_publication_date: string | null
  data: Data
}

export interface AlternateLanguage {
  id: string
  uid?: string
  type: string
  lang: string
}

export interface Repository {
  refs: Ref[]
  bookmarks: Record<string, string>
  languages: Language[]
  types: Record<string, string>
  tags: string[]
  forms: Record<string, Form>
  /**
   * @deprecated
   */
  experiments: unknown
  oauth_initiate: string
  oauth_token: string
  version: string
  license: string
}

export interface Query<TDocument extends Document = Document> {
  page: number
  results_per_page: number
  results_size: number
  total_results_size: number
  total_pages: number
  next_page: string | null
  prev_page: string | null
  results: TDocument[]
}

export interface Form {
  method: 'GET'
  enctype: string
  action: string
  name?: string
  rel?: string
  fields: Record<string, FormField>
}

export interface FormField {
  type: 'String' | 'Integer'
  multiple: boolean
  default?: string
}

export type LinkResolver<TDocument extends Document = Document> = (
  document: TDocument,
) => string
