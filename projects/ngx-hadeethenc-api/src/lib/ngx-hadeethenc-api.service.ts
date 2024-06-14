import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import {
  categoriesResponse,
  hadeethsListResponse,
  hadeethsOneResponse,
  languageResponse,
} from './ngx-hadeethenc-api.model';

@Injectable({
  providedIn: 'root',
})
export class NgxHadeethencApiService {
  private baseUrl = 'https://hadeethenc.com/api/v1';

  constructor(private http: HttpClient) {}

  public getLanguages(): Promise<languageResponse[]> {
    const url = `${this.baseUrl}/languages`;
    return firstValueFrom(this.http.get<languageResponse[]>(url));
  }

  public getCategoriesList(language: string): Promise<categoriesResponse[]> {
    const url = `${this.baseUrl}/categories/list/?language=${language}`;
    return firstValueFrom(this.http.get<categoriesResponse[]>(url));
  }

  public getCategoriesRoots(language: string): Promise<categoriesResponse[]> {
    const url = `${this.baseUrl}/categories/roots/?language=${language}`;
    return firstValueFrom(this.http.get<categoriesResponse[]>(url));
  }

  public getHadeethsList(p: {
    language: string;
    categoryId: string;
    page: string;
    perPage: string;
  }): Promise<hadeethsListResponse> {
    const url = `${this.baseUrl}/hadeeths/list/?language=${p.language}&category_id=${p.categoryId}&page=${p.page}&per_page=${p.perPage}`;
    return firstValueFrom(this.http.get<hadeethsListResponse>(url));
  }

  public getHadeethsOne(p: {
    language: string;
    id: string;
  }): Promise<hadeethsOneResponse> {
    const url = `${this.baseUrl}/hadeeths/one/?language=${p.language}&id=${p.id}`;
    return firstValueFrom(this.http.get<hadeethsOneResponse>(url));
  }
}
