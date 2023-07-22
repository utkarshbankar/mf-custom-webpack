import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';

const childRoutes: Routes = [
    {
        path:'',
        component:TestComponent
    }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(childRoutes)],
  exports: [CommonModule, RouterModule]
})
export class LazyRoutingModule { }


@NgModule({ 
  declarations: [],
  imports: [
    LazyRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class LazyModule {

  public resolveComponent(){
    return TestComponent;
  }
 }
