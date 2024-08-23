import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { config } from '@module-federation-lab/logger';

config.init('Shell');

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
