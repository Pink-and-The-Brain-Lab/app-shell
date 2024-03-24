import { TestBed } from '@angular/core/testing';
import { ApiRequestsInterceptorInterceptor } from './api-requests-interceptor.interceptor';
import { LocalStorageManager } from 'millez-web-components/dist/components';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('ApiRequestsInterceptorInterceptor', () => {
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ApiRequestsInterceptorInterceptor,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ApiRequestsInterceptorInterceptor,
          multi: true,
        },
      ],
    });

    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    const interceptor: ApiRequestsInterceptorInterceptor = TestBed.inject(
      ApiRequestsInterceptorInterceptor
    );
    expect(interceptor).toBeTruthy();
  });

  it('should add authorization header with token', () => {
    const token = 'mocked_token';
    const localStorageManager = TestBed.inject(LocalStorageManager);
    const localStorageManagerSpy = spyOn(localStorageManager, 'get').and.returnValue(token);
    const dummyResponse = 'dummy response';
    const httpClient = TestBed.inject(HttpClient);
    httpClient.get('/api/data').subscribe((response) => {
      expect(response).toEqual(dummyResponse);
    });

    const httpRequest = httpMock.expectOne('/api/data');
    expect(httpRequest.request.headers.has('Authorization')).toBeTruthy();
    expect(httpRequest.request.headers.get('Authorization')).toBe(
      `Bearer ${token}`
    );

    httpRequest.flush(dummyResponse);
    httpMock.verify();
  });
});
