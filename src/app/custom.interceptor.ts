import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CustomInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.url.includes('/auth/login')) {
      return next.handle(request);
    }
    const localToken = localStorage.getItem('token');
    console.log(localToken);
    // request = request.clone({
    //   headers: request.headers.set('Authorization', 'bearer ' + localToken),
    // });
    request = request.clone({
      headers: request.headers
        .set('Authorization', 'Bearer ' + localToken)
        .set('Content-Type', 'application/json'),
    });
    return next.handle(request);
  }
}
