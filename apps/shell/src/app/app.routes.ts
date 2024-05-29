import { Route } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const appRoutes: Route[] = [
  {
    path: 'mfe-module-federation',
    loadComponent: () => loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      exposedModule: './component'
    })
      .then((c) => c.ExampleComponent)
      .catch((err) => {
        console.log('Error lazy loading', err);
      })
  },
  {
    path: 'hybrid',
    loadComponent: () => loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4203/remoteEntry.js',
      exposedModule: './component'
    })
      .then((c) => c.ExampleComponent)
      .catch((err) => {
        console.log('Error lazy loading', err);
      })
  }
];
