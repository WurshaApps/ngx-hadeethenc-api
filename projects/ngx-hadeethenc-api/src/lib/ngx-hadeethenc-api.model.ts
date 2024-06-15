export interface hadeethsOneResponse {
  id: string;
  title: string;
  /**
   * matn
   */
  hadeeth: string;
  attribution: string;
  grade: string;
  explanation: string;
  /**
   * fawaed
   */
  hints: string[];
  categories: any[];
  translations: string[];
  words_meanings: wordsMeaning[];
  reference: string;
  hadeeth_ar: string;
  explanation_ar: string;
  hints_ar: string[];
  words_meanings_ar: wordsMeaning[];
  attribution_ar: string;
  grade_ar: string;
}

export interface wordsMeaning {
  word: string;
  meaning: string;
}

export interface languageResponse {
  code: string;
  native: string;
}

export interface categoriesResponse {
  id: string;
  title: string;
  hadeeths_count: string;
  parent_id?: string;
}

export interface hadeethsListResponse {
  data: hadeethsListData[];
  meta: hadeethsListMeta;
}

export interface hadeethsListData {
  id: string;
  title: string;
  translations: string[];
}

export interface hadeethsListMeta {
  current_page: string;
  last_page: number;
  total_items: number;
  per_page: string;
}
