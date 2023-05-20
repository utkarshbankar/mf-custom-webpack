import { Component, OnInit } from '@angular/core';
import { dispatchEvent, registerEventListener } from 'eventbus';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // standalone:true
})
export class AppComponent implements OnInit{
  title = 'ngremote';

  ngOnInit(): void {
    registerEventListener('REMOTE:clickEvent2').subscribe( event => console.log('[MF-remote]: Received event:', event))
  }

  raiseEvent(){
    dispatchEvent('REMOTE:clickEvent', {prop1Name:'from remote'});
  }

}
