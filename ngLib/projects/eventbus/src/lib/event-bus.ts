import { Observable, fromEvent } from "rxjs";

interface MFCustomeEvent{
    'REMOTE:clickEvent':{
        prop1Name:string
    },
    'REMOTE:clickEvent2':{
        prop2Name:string
    },
    'REMOTE:clickEvent3':{
        prop3Name:string
    }
}

interface MFOneEvent extends MFCustomeEvent{
    'MF:clickEvent':{
        prop1Name:string
    }
}

 type EventKeys = keyof MFCustomeEvent;

 export function dispatchEvent<K extends EventKeys>(eventName:K, eventArgs:MFCustomeEvent[K]){
    const event = new CustomEvent( eventName,{
        detail:eventArgs
    })
    // window dispach
    window.dispatchEvent(event);
 }

 export function registerEventListener<K extends EventKeys>(eventName:K):Observable<MFCustomeEvent[K]>{
    // let mfCustomeEvent$  = new Observable();

    return fromEvent(window, eventName, {once:true}, (event) => (event as CustomEvent).detail as MFCustomeEvent[K]);

    // window.addEventListener(eventName, EventArgs => {
    //     console.log('[] event Recived', EventArgs);
    // });
}


// old code
// dispatchEvent('REMOTE:click1Event', { prop1Name:'data one' });
// dispatchEvent('REMOTE:click2Event', { prop2Name:'data two' });
// dispatchEvent('REMOTE:click3Event', { prop3Name:'data three' });

// registerEventListener('REMOTE:clickEvent').subscribe({next:(eventArgs) => {
//     eventArgs.prop1Name
// }})