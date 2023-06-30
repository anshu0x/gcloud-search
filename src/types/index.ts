export interface Document {
  name: string;
  id: string;
  structData: StructData;
}

export interface StructData {
  term: string;
  url: string;
  title: string;
  insight2: string;
  article: string;
  insight3: string;
  relevance: string;
  article_summary: string;
  insight1: string;
  article_id: string;
  recommendation: string;
  summarized_recommendation: string;
  date: string;
}

export interface Data {
  id: string;
  document: Document;
}

export interface Results {
  results: Data[];
}
