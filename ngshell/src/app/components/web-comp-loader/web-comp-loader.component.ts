// import { loadRemoteModule } from '@angular-architects/module-federation';
import {  Component, ElementRef, ViewContainerRef } from '@angular/core';


@Component({
  selector: 'web-comp-loader',
  templateUrl: './web-comp-loader.component.html',
  styleUrls: ['./web-comp-loader.component.css']
})
export class WebCompLoaderComponent  {
  // this is to test web comp loader
  propsForWebComp = ['SessionId','userId','ComonentData'];
  webCompConfig = {
    events: ['webElementEventEmitter']
  };
  constructor() { }
  
  testEventBinding(e:any){
    alert('from shell comp '+ JSON.stringify(e));
  }
}
   