import { getManifest, loadRemoteModule } from "@angular-architects/module-federation";
import { RemoteLoaderComponent } from "./dynamic-remote-loader/remote-loader.component";
import { WebCompLoaderComponent } from "./web-comp-loader/web-comp-loader.component";
import { ManifestloaderComponent } from "./manifestloader/manifestloader.component";
import { MFCustomManifest } from "./utils/routerConfig";
import { buildRoutes } from "./utils/buildRoutes";

// const manifestRoutesData = getManifest<MFCustomManifest>();
// const childRoutes = buildRoutes(manifestRoutesData);
// console.log("app main routers call ", childRoutes);

// import { startsWith, WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';

export const APP_ROUTES = [
    {
      path: 'remoteloaderComp',
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