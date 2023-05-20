import { getManifest } from '@angular-architects/module-federation';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { buildRoutes } from '../utils/buildRoutes';
import { MFCustomManifest } from '../utils/routerConfig';

@Component({
  selector: 'app-manifestloader',
  templateUrl: './manifestloader.component.html',
  styleUrls: ['./manifestloader.component.css']
})
export class ManifestloaderComponent implements OnInit {

  public remotesArr :any = [];
  public manifestData :any;
  fetchLatestmanifestData:any;

  constructor(private http:HttpClient, private router: Router){}  

    ngOnInit(): void {
      let manifestData = this.manifestData = getManifest<MFCustomManifest>();
      
      const childRoutes = buildRoutes(manifestData);
      
      let routerConfig = this.router['config'];
      routerConfig.forEach(elm => { 
        if(elm.path == 'manifestLoader')
        { 
          elm.children = [...childRoutes];
        }
      })
      this.router.resetConfig(routerConfig);
      // this.router.resetConfig(this.router);
      this.remotesArr = Object.values(manifestData);
    }
}