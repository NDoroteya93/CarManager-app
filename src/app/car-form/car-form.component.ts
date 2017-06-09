
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Car } from '../car';
import { Type } from './types';
import { Transmission } from './transmission';
@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss']
})

export class CarFormComponent {

  complexForm: FormGroup;

  constructor(fb: FormBuilder) {
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
    console.log('Reactive Form Data');
    console.log(value);
  }
}