// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { platformBrowser } from "@angular/platform-browser";
// import { AppModule } from "./app/app.module";

// import { AppModule } from './app/app.module';

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

  import { AppModule } from './app/app.module';
 import { environment } from './environments/environment';
 import { bootstrap } from '@angular-architects/module-federation-tools';
 
 bootstrap(AppModule, {
   production: environment.production,
  //  appType: 'microfrontend'  // for micro frontend
   // appType: 'shell',      // for shell
 });


// (window as any).plattform = (window as any).plattform || {};
// let platform = (window as any).plattform[ngVersion];
// if (!platform) {
//   platform = platformBrowser();
//   (window as any).plattform[ngVersion] = platform; 
// }
// platform.bootstrapModule(AppModule).catch((err: any) => console.error(err));