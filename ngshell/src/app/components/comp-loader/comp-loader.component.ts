import { AfterContentInit, AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

export type CustomOutput = Record<string, (event:any) => any>;
export type CustomInput = Record<string, any>;


@Component({
  selector: 'app-comp-loader',
  templateUrl: './comp-loader.component.html',
  styleUrls: ['./comp-loader.component.css']
})
export class CompLoaderComponent implements AfterContentInit, AfterViewInit  {
  
  @Input() webCompConfig! : any;
  @Input() props! : CustomInput;
  @Input() events! : CustomOutput;

  @Output() outPutStatusEvents =  new EventEmitter();

  // create subscription do handel memory lean
  private subscription = new Subject();

  @ViewChild('vc', {read: ElementRef, static: true}) el!: ElementRef;
  element!:any;
  
  constructor(private route: ActivatedRoute, private elmRef:ElementRef, private vcRef:ViewContainerRef) { }

  ngAfterContentInit(): void {
    this.createAppendAndeRenderWebComp();
  }

  async createAppendAndeRenderWebComp(){
      const webElmName = document.createElement('script');
      // webElmName.src = "http://localhost:9012/ngweb/main.ea87d151028da062.js";
      webElmName.src = "http://localhost:5005/react-mfe-app/remoteEntry.js";
      //http://localhost:5005/remoteEntry.js
      webElmName.type = 'module';
      document.body.appendChild(webElmName);
      await this.renderWebComponent();
      // this.props && this.addPros(this.props);
      // this.events && this.addEvents(this.events);
  }

  renderWebComponent(){
    // this.element = document.createElement('popup-element');
    this.element = document.createElement('react-web-component');
    console.log("web comp elm", this.element);
    
    this.el.nativeElement.appendChild(this.element);
  }

  addPros(InputProps: any):void{
    // this value can be driven from the input provided to the comp.
    const propsArr: string [] = this.props as any; 
    
    // this is static solution use below code when you pass props as input and updated code
    propsArr?.forEach((propElm, index) => {
          this.element[propElm] = InputProps[index];
          this.element.setAttribute(propElm, InputProps[index]);
      });

    // propsArr?.forEach(propElm => {
    //     this.element[propElm] = InputProps && InputProps[propElm];
    //     this.element.setAttribute(propElm, InputProps[propElm]);
    // });
  }

  addEvents(outputEvents: CustomOutput): void{
    // here also eventsArray can be taken/driven from the input provided to the component
    const eventsArr: string[] = this.webCompConfig['events'] as any; 
    eventsArr?.forEach( (eventOne) => {
      outputEvents && this.element.addEventListener(eventOne, outputEvents[eventOne]);
    })
  }

  async ngAfterViewInit() {
    // const options = this.route.snapshot.data as WebComponentWrapperOptions;
    // this.renderWebComponent();
    // // try {
    //     await loadRemoteModule({
    //       type: 'module',
    //       remoteEntry: 'http://localhost:9012/remoteEntry.js',
    //       exposedModule: './routes'
    //     });         
    // }
    // catch(error) {
    //     console.error(error);
    // }
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  
}
   
/**
 * 
 * 
 * <web-comp-loader [webCompConfig]="webCompConfig"  [props] ="propsForWebComp" [events]="{  webElementEventEmitter: testEventBinding }" ></web-comp-loader>
 * 
 *  // this is to test web comp loader from it's parent component
  propsForWebComp = ['SessionId','userId','ComonentData'];
  webCompConfig = {
    events: ['webElementEventEmitter']
  };
 * 
 * 
 * testEventBinding(e:any){
      alert('from shell comp to test event binding of web comp ony  for now'+ JSON.stringify(e));
    }
*/