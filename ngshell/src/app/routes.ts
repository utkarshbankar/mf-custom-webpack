import { getManifest, loadRemoteModule } from "@angular-architects/module-federation";
import { RemoteLoaderComponent } from "./dynamic-remote-loader/remote-loader.component";
import { WebCompLoaderComponent } from "./components/web-comp-loader/web-comp-loader.component";
import { ManifestloaderComponent } from "./components/manifestloader/manifestloader.component";
import { MFCustomManifest } from "./utils/routerConfig";
import { buildRoutes } from "./utils/buildRoutes";
import { RmModLoaderComponent } from "./components/rm-mod-loader/rm-mod-loader.component";
import { Component } from "@angular/core";
import { ReactCompLoaderComponent } from "./components/react-comp-loader/react-comp-loader.component";

// const manifestRoutesData = getManifest<MFCustomManifest>();
// const childRoutes = buildRoutes(manifestRoutesData);
// console.log("app main routers call ", childRoutes);

// import { startsWith, WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';

export const APP_ROUTES = [
    {
      path: 'remoteLoaderComp',
      component:RemoteLoaderComponent
    },  
    // Here we are writing custamized logic to load the web-component
    // this is removed to test web comp loader , passing the prop and events
    {
      path:'customCompLoader',
      component:WebCompLoaderComponent
    },
    {
      path:'manifestLoader',
      component:ManifestloaderComponent
    },
    {
      path:'module-loader',
      component:RmModLoaderComponent
    },
    {
      path:'react-loader',
      component:ReactCompLoaderComponent
    }
    // This is rendering witout error but it is completely loading new page. - hence this is not recommanded
    // {
    //   path: 'webcomp',
    //   component: WebComponentWrapper,
    //   data: {
    //     remoteEntry: 'http://localhost:9012/remoteEntry.js',
    //     type:'module',
    //     exposedModule: './webComponent',
    //     elementName: 'popup-element'
    //   } as WebComponentWrapperOptions
    // },

    // this is working from both places properly i.e manifest and routes as provided here 
    //{
    //   path: 'standalone',
    //   loadChildren: () => 
    //     loadRemoteModule({
    //       type: 'module',
    //       remoteEntry: 'http://localhost:9013/remoteEntry.js',
    //       exposedModule: './routes'
    //     })
    //     .then(m => m.routes)
    // },
    
  ];