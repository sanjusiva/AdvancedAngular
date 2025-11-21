import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

const cache = new Map<string, HttpResponse<any>>();

export const SimpleCacheInterceptor: HttpInterceptorFn = (req, next) => {

  // Only cache GET calls
  if (req.method !== 'GET') {
    return next(req);
  }

  const key = req.urlWithParams;

  // Check cache
  const cachedResponse = cache.get(key);
  if (cachedResponse) {
    console.log('Returning cached:', key);
    return of(cachedResponse.clone());
  }

  // If not cached, send request and store response
  return next(req).pipe(
    tap(event => {
      if (event instanceof HttpResponse) {
        console.log('Caching:', key);
        cache.set(key, event.clone());
      }
    })
  );
}
