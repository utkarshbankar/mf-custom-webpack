import { Component, EventEmitter, Injector, Output } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { PopupService } from './popup.service';
import { PopupComponent } from './popup/popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Output() webElementEventEmitter: EventEmitter<string> = new EventEmitter();

  title = 'ngweb';
  //constructor(injector: Injector, public popup: PopupService) {
    // Convert `PopupComponent` to a custom element.
    // const PopupElement = createCustomElement(PopupComponent, {injector});
    // // Register the custom element with the browser.
    // customElements.define('popup-elements', PopupElement);
  // }

  onWebComponetEventCall(){
    this.webElementEventEmitter.emit('data from web element event');
  }

}
