import { Manifest, RemoteConfig } from "@angular-architects/module-federation";
 
 export type MfRemoteConfig = RemoteConfig & {
     exposedModule: string;
     displayName: string;
     routePath: string;
     ngModuleName: string;
     type:string
 };
 
 export type MFCustomManifest = Manifest<MfRemoteConfig>;