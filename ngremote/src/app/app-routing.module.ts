import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const App_Routes: Routes = [
  // {
  //   path:'',
  //   component:AppComponent
  // },
  // this is lazy loading module and works well in router loading in module federation
  { 
    path: 'innerRem', 
    loadChildren: () => import('./innerrem/innerrem.module')
        .then(m => m.InnerremModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(App_Routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
