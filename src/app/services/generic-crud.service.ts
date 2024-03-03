import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class GenericCRUDService {

    private readonly baseUrl = environment.baseUlr;
    private readonly httpClient = inject(HttpClient);

    genericGet<T>(apiUrl: string, options = {}): Observable<T> {
        return this.httpClient.get<T>(`${this.baseUrl}${apiUrl}`, options);
    }

    genericPost<T, U>(apiUrl: string, payload: U = {} as U, options = {}): Observable<T> {
        return this.httpClient.post<T>(`${this.baseUrl}${apiUrl}`, payload, options);
    }

    genericPut<T, U>(apiUrl: string, payload: U = {} as U, options = {}): Observable<T> {
        return this.httpClient.put<T>(`${this.baseUrl}${apiUrl}`, payload, options);
    }

    genericPatch<T, U>(apiUrl: string, payload: U = {} as U, options = {}): Observable<T> {
        return this.httpClient.patch<T>(`${this.baseUrl}${apiUrl}`, payload, options);
    }

    genericDelete<T>(apiUrl: string): Observable<T> {
        return this.httpClient.delete<T>(`${this.baseUrl}${apiUrl}`);
    }
}
