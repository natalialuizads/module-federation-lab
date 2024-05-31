import { ApplicationConfig, NgZone, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    (globalThis as any).ngZone ? { provide: NgZone, useValue: (globalThis as any).ngZone } : [],
  ],
};
