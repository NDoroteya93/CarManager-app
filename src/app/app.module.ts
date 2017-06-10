import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PaginationDirective} from 'angular2-bootstrap-pagination/directives/pagination.directive';
import { AlertModule } from 'ngx-bootstrap';
import { PaginationModule } from 'ngx-bootstrap';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CarFormComponent } from './car-form/car-form.component';

// Services
import { CarDataService } from './core/service/car-data.service';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsListComponent,
    CarFormComponent,
    NavComponent, 
    PaginationDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule, 
    AlertModule.forRoot(), 
    PaginationModule.forRoot()
  ],
  providers: [
    CarDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
