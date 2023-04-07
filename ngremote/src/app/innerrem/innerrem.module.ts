import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  {
    path:'',
    component:TestComponent,
  },
  {path:'first', component:FirstComponent},
  {path:'second', component:SecondComponent},
];
@NgModule({
  declarations: [
    TestComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    TestComponent
  ]
  // schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class InnerremModule { }
