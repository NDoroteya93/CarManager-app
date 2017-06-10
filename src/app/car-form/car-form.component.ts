
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Car } from '../car';
import { Type } from '../types';
import { Transmission } from '../transmission';

import { CarDataService } from '../core/service/car-data.service';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss']
})

export class CarFormComponent {

  complexForm: FormGroup;

  constructor(
    fb: FormBuilder,
    private carService: CarDataService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    let car = new Car({
      'brand': [null, Validators.required],
      'model': [null, Validators.required],
      'description': [null],
      'registration_number': [null, Validators.required],
      'fuelType': [null, Validators.required],
      'transmission': [null, Validators.required]
    });
    this.complexForm = fb.group(car);
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

  changeValue() {
    this.complexForm.controls['fuelType'].setValue(this.types[1], { onlySelf: true });
    this.complexForm.controls['transmission'].setValue(this.transmissions[1], { onlySelf: true });
  }

  submitForm(value: any): void {
    this.carService.addCar(value);
    this.router.navigate([''])
  }
}