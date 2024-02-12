import { Injectable, inject } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageManager, Storage } from 'millez-web-components/dist/components';

@Injectable()
export class ApiRequestsInterceptorInterceptor implements HttpInterceptor {
  private readonly localStorageManager = inject(LocalStorageManager);

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.localStorageManager.get<string>(Storage.TOKEN);
    const _request = request.clone({  
      setHeaders: {  
        Authorization: `Bearer ${token}`  
      }})
    return next.handle(_request);
  }
}
