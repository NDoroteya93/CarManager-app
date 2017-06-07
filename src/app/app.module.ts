import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CarFormComponent } from './car-form/car-form.component';

// Services
import { CarDataService } from './core/service/car-data.service';

@NgModule({
  declarations: [
    AppComponent,
    CarsListComponent,
    CarFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CarDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
