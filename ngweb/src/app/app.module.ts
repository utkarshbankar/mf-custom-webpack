import { NgModule , CUSTOM_ELEMENTS_SCHEMA, Inject, DoBootstrap, ApplicationRef, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopupService } from './popup.service';
import { PopupComponent } from './popup/popup.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [],
  schemas:[ ],
})
export class AppModule implements DoBootstrap{ 

  constructor(private injector: Injector){}
  
  ngDoBootstrap(appRef: ApplicationRef): void {
    // const el = createCustomElement(AppComponent, {injector: this.injector});
    // customElements.define('')
    const PopupElement = createCustomElement(AppComponent, {injector: this.injector});
    // Register the custom element with the browser.
    customElements.define('popup-element', PopupElement);
  }
}  
