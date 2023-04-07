import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent {

  function11(){
    const script = document.createElement('script');
    script.src = 'main.js';
    script.type = 'module';
    document.body.appendChild(script);

  }
}
