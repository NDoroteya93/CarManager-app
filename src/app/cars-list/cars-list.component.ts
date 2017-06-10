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
    private data:Object[] = [];
    page:number = 1;
    itemsPerPage:number = 10;
    maxSize:number = 5;

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
     this.carDetails = this.carService.getAllCars();
     this.data = this.carDetails;
     this.onPageChange({page: this.page, itemsPerPage: this.itemsPerPage})
  }

  deleteCar(id: number, index: number) {
    this.carService.deleteCar(id);
    this.getCarDetails();
  }

  updateCar(id: number, car: Object = {}){ 
    
    this.carService.updateCar(id, car);
  }

  onPageChange(page:any) {
     let start = (page.page - 1) * page.itemsPerPage;
      let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : this.data.length;
      this.carDetails = this.data.slice(start, end);
  }
}
