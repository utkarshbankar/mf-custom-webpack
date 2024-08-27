import { Component, OnInit } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { loadRemoteScript } from './remote-loader';


@Component({
  selector: 'app-react-comp-loader',
  templateUrl: './react-comp-loader.component.html',
  styleUrls: ['./react-comp-loader.component.css']
})
export class ReactCompLoaderComponent implements OnInit {
  dataFromRemoteApp:any ;  
  async ngOnInit(): Promise<void>{
        try{
          const remoteUrl = "http://localhost:5000/remoteEntry.js";
          const scope = "MFERemoteApp"; //Remote App name 
          const module = "./RemoteApp";

          const RemoteApp =  await loadRemoteScript(remoteUrl, scope, module);
          const HandelDataFromRemote = (data:any) => {
            this.dataFromRemoteApp = data;
          }

          const props = {
            msg: "Message from parent component- i.e. Angular shell",
            onRemoteEventHandler:HandelDataFromRemote
          }
          this.renderRemoteApp(RemoteApp, props);
        } catch(err){
          console.error('Error loading the remote app', err);
        }
    }

    renderRemoteApp(App:any, props:any){
      const container = document.getElementById('react-root');

      if(container){
        const root = ReactDOM.createRoot(container);
        root.render(React.createElement(App.default, props));
      } else{
        console.log('Container element not found');
      }
    }
}


/**
 * old code
 */

// ngOnInit(){
  // This will won't work as we need to do some load external application with the web comp 
  // this.appLoader = import('MFERemoteApp/App').then((module) => {
  //   const MyComponent = module.default;
  //   // Render or use MyComponent as needed
  // });
// }
    // constructor(private reactLoader: ReactLoaderService) {}

  // async ngAfterViewInit() {
  //   // const reactApp = this.reactLoader.getReactApp();
  //   // const { MyComponent } = await import('MFERemoteApp/reactRemote');
  //   // this.reactElement = MyComponent;
  //   // console.log("MyComponentMyComponent", MyComponent);
    
  //   if (this.reactElement) {
  //     const container = document.getElementById('react-root');
  //   //   const React = (await import('react')).default;
  //   // const ReactDOM = (await import('react-dom')).default;

  //     if (container) {
  //       // Render React app into the Angular component's DOM
  //       const root = ReactDOM.createRoot(container);
  //       root.render(React.createElement(this.reactElement));
  //     }
  //   }
  // }