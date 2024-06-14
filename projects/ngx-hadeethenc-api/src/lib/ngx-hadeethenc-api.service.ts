import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';
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

  public getLanguages(): Observable<languageResponse[]> {
    const url = `${this.baseUrl}/languages`;
    return this.http.get<languageResponse[]>(url);
  }

  public getCategoriesList(language: string): Observable<categoriesResponse[]> {
    const url = `${this.baseUrl}/categories/list/?language=${language}`;
    return this.http.get<categoriesResponse[]>(url);
  }

  public getCategoriesRoots(
    language: string
  ): Observable<categoriesResponse[]> {
    const url = `${this.baseUrl}/categories/roots/?language=${language}`;
    return this.http.get<categoriesResponse[]>(url);
  }

  public getHadeethsList(p: {
    language: string;
    categoryId: string;
    page: string;
    perPage: string;
  }): Observable<hadeethsListResponse> {
    const url = `${this.baseUrl}/hadeeths/list/?language=${p.language}&category_id=${p.categoryId}&page=${p.page}&per_page=${p.perPage}`;
    return this.http.get<hadeethsListResponse>(url);
  }

  public getHadeethsOne(p: {
    language: string;
    id: string;
  }): Observable<hadeethsOneResponse> {
    const url = `${this.baseUrl}/hadeeths/one/?language=${p.language}&id=${p.id}`;
    return this.http.get<hadeethsOneResponse>(url);
  }

  public getLanguagesAsync(): Promise<languageResponse[]> {
    return firstValueFrom(this.getLanguages());
  }

  public getCategoriesListAsync(
    language: string
  ): Promise<categoriesResponse[]> {
    return firstValueFrom(this.getCategoriesList(language));
  }

  public getCategoriesRootsAsync(
    language: string
  ): Promise<categoriesResponse[]> {
    return firstValueFrom(this.getCategoriesRoots(language));
  }

  public getHadeethsListAsync(p: {
    language: string;
    categoryId: string;
    page: string;
    perPage: string;
  }): Promise<hadeethsListResponse> {
    return firstValueFrom(this.getHadeethsList(p));
  }

  public getHadeethsOneAsync(p: {
    language: string;
    id: string;
  }): Promise<hadeethsOneResponse> {
    return firstValueFrom(this.getHadeethsOne(p));
  }
}
