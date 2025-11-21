import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RouteReuseStrategy } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { CustomReuseStrategy } from './route-reuse';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { SimpleCacheInterceptor } from './cacheHTTP/cache-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(
      withInterceptors([
        SimpleCacheInterceptor   // 👈 functional interceptor registered here
      ])
    ),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    // {provide: HTTP_INTERCEPTORS, useClass: SimpleCacheInterceptor, multi: true},
    { provide: RouteReuseStrategy, useClass: CustomReuseStrategy }
  ]
};
