import { NgModule, CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WebCompLoaderComponent } from './components/web-comp-loader/web-comp-loader.component';

import { startsWith, WebComponentWrapper, WebComponentWrapperOptions, ModuleFederationToolsModule } from '@angular-architects/module-federation-tools';
import { FormsModule } from '@angular/forms';
import { RemoteLoaderComponent } from './dynamic-remote-loader/remote-loader.component';
import { HttpClientModule } from '@angular/common/http';
import { AppInitilizerService } from './initsrv/app-initilizer.service';
import { APP_ROUTES } from './routes';
import { CompLoaderComponent } from './components/comp-loader/comp-loader.component';
import { ManifestloaderComponent } from './components/manifestloader/manifestloader.component'; 

@NgModule({
  declarations: [
    AppComponent,
    WebCompLoaderComponent,
    RemoteLoaderComponent,
    CompLoaderComponent,
    ManifestloaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    ModuleFederationToolsModule,
    FormsModule,
    HttpClientModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA] ,
  providers: [
    AppInitilizerService,
    {
      provide: APP_INITIALIZER,
      useFactory: (appInitService: AppInitilizerService) =>  appInitService.initService(),
      deps: [AppInitilizerService],
      multi: true
    },
    // ...
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
