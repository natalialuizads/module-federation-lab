import { createApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { createCustomElement } from '@angular/elements';
import { ApplicationRef } from '@angular/core';

(async () => {
  const appRef: ApplicationRef  = await createApplication(appConfig);

  const tagElement = customElements.get('mfe-header');

  if(tagElement) return;

  const mfeHeader = createCustomElement(AppComponent, {
    injector: appRef.injector
  });

  customElements.define('mfe-header', mfeHeader);
})();
