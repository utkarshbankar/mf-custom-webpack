import { Component, OnInit } from '@angular/core';
import { ReactLoaderService } from 'src/app/utils/reactloader/loader.service';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';


@Component({
  selector: 'app-react-comp-loader',
  templateUrl: './react-comp-loader.component.html',
  styleUrls: ['./react-comp-loader.component.css']
})
export class ReactCompLoaderComponent implements OnInit {
    appLoader: any;
    ngOnInit(){
      // This will won't work as we need to do some load external application with the web comp 
      // this.appLoader = import('MFERemoteApp/App').then((module) => {
      //   const MyComponent = module.default;
      //   // Render or use MyComponent as needed
      // });
    }

    
    constructor(private reactLoader: ReactLoaderService) {}

  ngAfterViewInit() {
    const reactApp = this.reactLoader.getReactApp();
    if (reactApp) {
      const container = document.getElementById('react-root');
      if (container) {
        // Render React app into the Angular component's DOM
        const root = ReactDOM.createRoot(container);
        root.render(React.createElement(reactApp));
      }
    }
  }
}
