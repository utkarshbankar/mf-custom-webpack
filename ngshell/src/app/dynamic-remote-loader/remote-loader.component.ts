import { loadRemoteModule , getManifest} from '@angular-architects/module-federation';
import { Component , AfterViewInit, ViewChild, ViewContainerRef, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-remote-loader',
  templateUrl: './remote-loader.component.html',
  styleUrls: ['./remote-loader.component.css']
})
export class RemoteLoaderComponent implements OnInit {


  @ViewChild('placeHolder', { read: ViewContainerRef, static:true })
   viewContainer!: ViewContainerRef;
  //  @ViewChild('placeHolder', { read: ElementRef, static:true })
  //  eleRef!: ElementRef;
  public mfdataObj:any;
   ngOnInit(){
    this.mfdataObj = getManifest();
   }
   async load(): Promise<void> {
    //  alert('Inside remote loader comp');
    // const m = await import('ngremote/Component');
    const m = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:9011/remoteEntry.js',
      exposedModule: './Component'
    }) ;
    const ref = this.viewContainer.createComponent(m.AppComponent);
    const compInstance = ref.instance as any;
    // compInstance.ngOnInit()

    // const m = await loadRemoteModule({
    //   type: 'module',
    //   remoteEntry: 'http://localhost:9012/remoteEntry.js',
    //   exposedModule: './webComponent'
    // }) ;
    //console.log(m.startsWith('webcomp'));
    
    //const ref = this.viewContainer.createComponent(m.MyTicketsComponent);
    
    // const element = document.createElement('popup-element');
    // this.eleRef.nativeElement.appendChild(element);
}
}

/**
 * -------------------------------Working code --------------------------------------------
* This is common logic to load the remote app using the Component and that is AppComponent whiich is not an standalone.
* Here we have not updated the bootstrap.ts logic.
* 
* bootstrap.ts of remote
* -------------------------
* import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
* import { AppModule } from './app/app.module';
* platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));
*
* --------------------------------------webpack.config.js---------------------------------------------
*  name: "ngremote",
    filename: "remoteEntry.js",
    exposes: {
        './Component': './/src/app/app.component.ts',
        './routes': './/src/app/app-routing.module.ts',
        './Module':'./src/app/innerrem/innerrem.module.ts'
    },   
* 
* from above code conclusion is we are able to load only comp through the loadRemoteModule
*  We can not load the routes exposed from remote or the modules exposed as we have to bind this modules 
*  to the createComponent 
* as we are able to load apps module as well if we do provice work around for that. but that module should 
not have child routes
 
so we are able to load child module of remote app theough only routes and it's child routes as well. - try this
*
*
*
* ----------------------------------------------loading logic in this comp -----------------------------
*  const m = await loadRemoteModule({
//   type: 'module',
//   remoteEntry: 'http://localhost:9011/remoteEntry.js',
//   exposedModule: './Component'
// }) ;    
// const ref = this.viewContainer.createComponent(m.AppComponent);}
*/
