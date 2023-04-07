import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  // import { AppModule } from './app/app.module';
//  import { environment } from './environments/environment';
//  import { bootstrap } from '@angular-architects/module-federation-tools';
 
//  bootstrap(AppModule, {
//    production: environment.production,
//   //  appType: 'microfrontend'  // for micro frontend
//    // appType: 'shell',      // for shell
//  });