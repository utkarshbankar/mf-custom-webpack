import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { dispatchEvent, registerEventListener } from 'eventbus';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone:true,
  imports:[CommonModule]
})
export class AppComponent implements OnInit {
  title = 'ngstandalone';

  ngOnInit(){
    registerEventListener('REMOTE:clickEvent2').subscribe( event => console.log('[MF-standalone]: Received event:', event))
  }

  raiseCustomEventFromStandalone(){
    console.log('button clicked in sstandalone');
    dispatchEvent('REMOTE:clickEvent', { prop1Name:'from standalone'} );
  }
}
