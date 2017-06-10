import { Component, OnInit,  Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Type } from '../types';
import { Transmission } from '../transmission';

import { CarDataService } from '../core/service/car-data.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements OnInit {
  carDetails;

  constructor(
    private carService: CarDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getCarDetails();
  }

  // type car
  selectedType: Type = new Type('', '');
  types = [
    new Type('petrol', 'Petrol'),
    new Type('diesel', 'Diesel'),
    new Type('electric', 'Electric')
  ];

  // transmission car
  selectedTransmission: Transmission = new Transmission('', '');
  transmissions = [
    new Transmission('manual', 'Manual'),
    new Transmission('automatic', 'Automatic'),
    new Transmission('semi-automatic', 'Semi-Automatic')
  ];


  getCarDetails() { 
    return this.carDetails = this.carService.getAllCars();
  }

  deleteCar(id: number, index: number) {
    this.carService.deleteCar(id);
    this.getCarDetails();
  }

  updateCar(id: number, car: Object = {}){ 
    
    this.carService.updateCar(id, car);
  }
}
