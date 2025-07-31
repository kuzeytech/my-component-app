import { createApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { createCustomElement } from '@angular/elements';
import { App } from './app/app';

// Replace bootstrapApplication() with the following function:
createApplication(appConfig)
  .then((app) => {
    const appComponent = createCustomElement(App, {
      injector: app.injector
    });
    customElements.define('my-component', appComponent);
  })
  .catch((err) => console.error(err));