import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
    categoriesResponse,
    hadeethsListResponse,
    hadeethsOneResponse,
    languageResponse,
} from './ngx-hadeethenc-api.model';

/**
 * an Angular api client for hadeethenc.com
 */
@Injectable({
    providedIn: 'root',
})
export class NgxHadeethencApiService {
    private baseUrl = 'https://hadeethenc.com/api/v1';

    constructor(private http: HttpClient) {}

    /**
     * List all available languages for HadeethEnc.com
     * @returns json object containing all available languages with their iso codes and native names.
     */
    public getLanguages(): Observable<languageResponse[]> {
        const url = `${this.baseUrl}/languages`;
        return this.http.get<languageResponse[]>(url);
    }

    /**
     * List all categories by language code.
     * @param language language iso code
     * @returns array of json objects each object represents a category.
     */
    public getCategoriesList(
        language: string,
    ): Observable<categoriesResponse[]> {
        const url = `${this.baseUrl}/categories/list/?language=${language}`;
        return this.http.get<categoriesResponse[]>(url);
    }

    /**
     * List root categories by language code.
     * @param language language iso code
     * @returns root categories (main categories) in specific language, it accepts language iso code and returns json array of objects each object represents a root category.
     */
    public getCategoriesRoots(
        language: string,
    ): Observable<categoriesResponse[]> {
        const url = `${this.baseUrl}/categories/roots/?language=${language}`;
        return this.http.get<categoriesResponse[]>(url);
    }

    /**
     * List Hadeeths by category id and language iso code.
     * @param p language iso code, category id, page number (optional, defaults to 1) ,Hadeeths per page(optional, defaults to 20)
     * @returns json object containing "data" object which contains array of json objects each object represents a Hadeeth basic information (id, title, translations iso codes), the second object is "meta" containing meta data required for pagination.
     */
    public getHadeethsList(p: {
        /**
         * language iso code
         */
        language: string;
        categoryId: string;
        /**
         * page number, optional, defaults to 1
         */
        page?: string;
        /**
         * Hadeeths per page, optional, defaults to 20
         */
        perPage?: string;
    }): Observable<hadeethsListResponse> {
        const url = `${this.baseUrl}/hadeeths/list/?language=${p.language}&category_id=${p.categoryId}&page=${p.page}&per_page=${p.perPage}`;
        return this.http.get<hadeethsListResponse>(url);
    }

    /**
     * Get single Hadeeth details by Hadeeth id and language iso code.
     * @param p language iso code, hadeeth id
     * @returns The response differs when the language is "Arabic" or not, if it's Arabic then it returns all Hadeeth data (id, title, Hadeeth text (matn), explanation, hints (fawaed), word meaning and references), if non Arabic it returns translated parts (id, title, Hadeeth text (matn), explanation and hints (if translated), it doesnt return reference nor word meaning as they are not translated.
     */
    public getHadeethsOne(p: {
        /**
         * language iso code
         */
        language: string;
        /**
         * hadeeth id
         */
        id: string;
    }): Observable<hadeethsOneResponse> {
        const url = `${this.baseUrl}/hadeeths/one/?language=${p.language}&id=${p.id}`;
        return this.http.get<hadeethsOneResponse>(url);
    }
}
