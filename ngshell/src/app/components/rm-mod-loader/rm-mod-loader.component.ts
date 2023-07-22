import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, Injector, AfterViewInit, ViewChild , ViewContainerRef, createNgModule, NgModuleRef} from '@angular/core';

@Component({
  selector: 'app-rm-mod-loader',
  templateUrl: './rm-mod-loader.component.html',
  styleUrls: ['./rm-mod-loader.component.css']
})
export class RmModLoaderComponent implements AfterViewInit{
 @ViewChild('moduleLoader', {read: ViewContainerRef}) remoteModule!: ViewContainerRef;
  viewContainer: any;

 constructor(private injector:Injector){}
  async ngAfterViewInit() {
    const m = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:9014/remoteModuleExposeEntry.js',
      exposedModule: './module'
    }) ;
    const modRef:NgModuleRef<any> = createNgModule(m.LazyModule, this.injector);
    const moduleFactory = modRef.instance.resolveComponent();
    this.remoteModule.createComponent(moduleFactory, {ngModuleRef: modRef});
   }
 /**
  * pass all config to load the remote module and add the specific code to load the app
 */

  
}

