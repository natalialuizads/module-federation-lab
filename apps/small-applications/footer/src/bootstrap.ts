import { createApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { createCustomElement } from '@angular/elements';
import { ApplicationRef } from '@angular/core';
import { config } from '@module-federation-lab/logger';

config.initMicrofrontend('Mfe2');

(async () => {
  const appRef: ApplicationRef  = await createApplication(appConfig);

  const tagElement = customElements.get('mfe-footer');

  if(tagElement) return;

  const mfeFooter = createCustomElement(AppComponent, {
    injector: appRef.injector
  });

  customElements.define('mfe-footer', mfeFooter);
})();
