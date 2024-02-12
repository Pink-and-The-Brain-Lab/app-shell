import { TestBed } from '@angular/core/testing';

import { ApiRequestsInterceptorInterceptor } from './api-requests-interceptor.interceptor';

describe('ApiRequestsInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ApiRequestsInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ApiRequestsInterceptorInterceptor = TestBed.inject(ApiRequestsInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
