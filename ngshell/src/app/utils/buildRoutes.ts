import { loadRemoteModule } from '@angular-architects/module-federation';
 import { Routes } from '@angular/router';
 import { APP_ROUTES } from '../routes';
 import { MFCustomManifest } from './routerConfig';
 
 export function buildRoutes(options: MFCustomManifest): Routes {
 
     const lazyRoutes: Routes = Object.keys(options).map(key => {
         const entry = options[key];
         return {
             path: `${entry.routePath}`,
             loadChildren: () => 
                 loadRemoteModule({
                     type: 'manifest',
                     remoteName: key,
                     exposedModule: entry.exposedModule
                 })
                 .then(m => m[entry.ngModuleName])
         }
     });
 
    //  return [...APP_ROUTES, ...lazyRoutes]; 
     return [...lazyRoutes];
 }