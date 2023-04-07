import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';
import { getManifest, setManifest} from '@angular-architects/module-federation';
import { MFCustomManifest } from '../utils/routerConfig';
import { firstValueFrom, tap } from 'rxjs';
import { buildRoutes } from '../utils/buildRoutes';
@Injectable({
  providedIn: 'root'
})

export class AppInitilizerService {
  private manifestData:any;
  private setmanifestdataObj:any;
  constructor(private http:HttpClient) {
    
   }
   
   initService():any{
    // this.initManifest().subscribe( data =>{
    //   this.manifestData = data;
    //   this.setManifestData(this.manifestData.apps)
    // });
    // return firstValueFrom( this.initManifest())
    // return new Promise<void>((res, rej) => {
    //    this.initManifest().subscribe(data => {
    //      this.manifestData = data;
    //      this.setManifestData(this.manifestData.apps);
    //    });
    //    res();
    //  });
    // this is to handle promise resolution in the bootstraping module o.w it will not work
    return () => this.initManifest().pipe(    
      // load() function returns Observable
        tap((data) => {
        // add custom logic here
        this.manifestData = data;
        this.setManifestData(this.manifestData.apps);
                
        const manifestdata = getManifest() as any;
        console.log("call from init service",manifestdata);
        const buildRoutesData = buildRoutes(manifestdata);
        })
      )
   }

   initManifest(){
    return this.http.get('./assets/manifest.json');
   }

   setManifestData(mfdata:MFCustomManifest){
    setManifest(mfdata).catch(
      err=>{
        console.log('error while setting manifest data');
        console.log(err); 
      }
    );
   }

}
