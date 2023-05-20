import { Component, OnInit } from '@angular/core';
// to work with custome event
import { dispatchEvent, registerEventListener } from 'eventbus';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngshell';
  
  ngOnInit(){
    // window.addEventListener('event:mf-shell', e => {
    //   console.log('[mf-shell] event received', e);
    // })
    registerEventListener('REMOTE:clickEvent').subscribe(event => console.log('[mf-shell] received event', event))
  }

  raiseCustomEvent(){
    dispatchEvent('REMOTE:clickEvent2', {'prop2Name': 'from mf-shell'})
   }
}
