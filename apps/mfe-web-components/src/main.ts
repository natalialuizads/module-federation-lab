import { createApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { createCustomElement } from '@angular/elements';

(async () => {
  const app = createApplication(appConfig);

  const customCardElement = createCustomElement(AppComponent, {
    injector: (await app).injector
  });
  customElements.define('mfe-web-components', customCardElement);
})();
