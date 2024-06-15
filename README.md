# ngx-hadeethenc-api

an Angular api client for hadeethenc.com/api

## Overview

HadeethEnc is a project aims to provide simplified explanations and clear translation of the authentic Prophetic (Prophet Muhammad ﷺ) hadiths.

Contents of the project can be used, with the following terms and conditions:

1. No modification, addition, or deletion of the content.
2. Clearly referring to the publisher and the source (HadeethEnc.com).

## Available API endpoints:

### List all available languages for HadeethEnc.com

```
getLanguages(): Observable<languageResponse[]>
```

This endpoint returns json object containing all available languages with their iso codes and native names.

### List all categories by language code.

```
getCategoriesList(language: string): Observable<categoriesRespone[]>
```

This endpoint accepts language iso code and returns array of json objects each object represents a category.

### List root categories by language code.

```
getCategoriesRoots(language: string): Observable<categoriesResponse[]>g
```

This endpoint returns root categories (main categories) in specific language, it accepts language iso code and returns json array of objects each object represents a root category.

### List Hadeeths by category id and language iso code.

```
getHadeethsList(p: {
  language: string;
  categoryId: string;
  page: string;
  perPage: string;
}): Observable<hadeethsListResponse>
```

This endpoint accepts language iso code, category id (both required) and page (represents page number, optional defaults to 1) and per_page (optional defaults to 20) and returns json object containing "data" object which contains array of json objects each object represents a Hadeeth basic information (id, title, translations iso codes), the second object is "meta" containing meta data required for pagination.

### Get single Hadeeth details by Hadeeth id and language iso code.

```
getHadeethsOne(p: {
    language: string;
    id: string;
}): Observable<hadeethsOneResponse>
```

The response differs when the language is "Arabic" or not, if it's Arabic then it returns all Hadeeth data (id, title, Hadeeth text (matn), explanation, hints (fawaed), word meaning and references), if non Arabic it returns translated parts (id, title, Hadeeth text (matn), explanation and hints (if translated), it doesnt return reference nor word meaning as they are not translated.

## Response models:

```
interface hadeethsOneResponse {
  id: string;
  title: string;
  hadeeth: string;
  attribution: string;
  grade: string;
  explanation: string;
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

interface wordsMeaning {
  word: string;
  meaning: string;
}
```

```
interface languageResponse {
  code: string;
  native: string;
}
```

```
interface categoriesResponse {
  id: string;
  title: string;
  hadeeths_count: string;
  parent_id?: string;
}
```

```
interface hadeethsListResponse {
  data: hadeethsListData[];
  meta: hadeethsListMeta;
}

interface hadeethsListData {
  id: string;
  title: string;
  translations: string[];
}

interface hadeethsListMeta {
  current_page: string;
  last_page: number;
  total_items: number;
  per_page: string;
}
```
