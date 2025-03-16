// import { HttpInterceptorFn } from '@angular/common/http';

// export const headersInterceptor: HttpInterceptorFn = (req, next) => {
//   return next(req);
// };

import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpInterceptorFn,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>>{
    // Clona la solicitud y agrega los headers
    const modifiedReq = req.clone({
      setHeaders: {
        'ngrok-skip-browser-warning': 'true', // Agrega este header
        'Custom-Header': 'custom-value', // Puedes agregar más headers si es necesario
      },
    });

    // Envía la solicitud modificada
    return next.handle(modifiedReq);
  }
}