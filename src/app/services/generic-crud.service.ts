import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class GenericCRUDService {

    private readonly httpClient = inject(HttpClient);

    genericGet<T>(apiUrl: string, options = {}): Observable<T> {
        return this.httpClient.get<T>(apiUrl, options);
    }

    genericPost<T, U>(apiUrl: string, payload: U = {} as U, options = {}): Observable<T> {
        return this.httpClient.post<T>(apiUrl, payload, options);
    }

    genericPut<T, U>(apiUrl: string, payload: U = {} as U, options = {}): Observable<T> {
        return this.httpClient.put<T>(apiUrl, payload, options);
    }

    genericPatch<T, U>(apiUrl: string, payload: U = {} as U, options = {}): Observable<T> {
        return this.httpClient.patch<T>(apiUrl, payload, options);
    }

    genericDelete<T>(apiUrl: string): Observable<T> {
        return this.httpClient.delete<T>(apiUrl);
    }
}
