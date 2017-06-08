import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CarsListComponent  } from './cars-list/cars-list.component';
import { CarFormComponent} from './car-form/car-form.component';

const routes: Routes = [
  {  path: '', component: CarsListComponent}, 
  {path: 'form', component: CarFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
