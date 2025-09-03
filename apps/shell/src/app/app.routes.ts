import { Route } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { MfeWrapperComponent, WebComponentWrapperOptions } from '@module-federation-lab/mfe-wrapper';

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
    path: 'mfe-horizontal-split',
    loadComponent: () => import('./pages/horizontal-split.component').then((m) => m.HorizontalSplitComponent)
  },
   {
     path: 'hybrid',
     loadComponent: () => loadRemoteModule({
       type: 'module',
       remoteEntry: 'http://localhost:4203/remoteEntry.js',
       exposedModule: './module-federation'
     })
       .then((c) => c.ExampleComponent)
       .catch((err) => {
         console.log('Error lazy loading', err);
       })
   },
  {
    path: 'web-components',
    component: MfeWrapperComponent,
    data: {
            type: 'module',
            remoteEntry: 'http://localhost:4203/remoteEntry.js',
            remoteName: 'mfe-hybrid',
            exposedModule: './web-components',
            elementName: 'mfe-hybrid'
    } as WebComponentWrapperOptions
  }
];
