import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CarFormComponent } from './car-form/car-form.component';
import {SimpleFormComponent} from './car-form/car.simpleform';
import {ComplexFormComponent } from './car-form/car.complexform';
import {FormValidationComponent} from './car-form/car.formvalidation';

// Services
import { CarDataService } from './core/service/car-data.service';
import { LocalStorageService } from './core/service/local-storage.service';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsListComponent,
    CarFormComponent,
    NavComponent, 
    SimpleFormComponent, 
    ComplexFormComponent, 
    FormValidationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    ReactiveFormsModule, 
    HttpModule
  ],
  providers: [
    CarDataService,
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
