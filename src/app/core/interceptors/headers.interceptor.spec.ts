import { TestBed } from '@angular/core/testing';
import { HttpHandler, HttpRequest } from '@angular/common/http';

import { HeadersInterceptor } from './headers.interceptor';

describe('headersInterceptor', () => {
  const interceptor = (req: HttpRequest<any>, next: HttpHandler) => 
    TestBed.runInInjectionContext(() => new HeadersInterceptor().intercept(req, next));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});
