// src/app/react-loader.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReactLoaderService {
  private reactApp: any;

  constructor() {
    this.loadReactApp();
  }

  private loadReactApp() {
    import('MFERemoteApp/App').then(module => {
      this.reactApp = module.default;
    });
  }

  getReactApp() {
    return this.reactApp;
  }
}
