import {Component } from '@angular/core';
import { Type } from './types';
import { Transmission} from './transmission';

@Component({ 
    selector: 'simple-form', 
     templateUrl: './car.simpleform.html'
})

export class SimpleFormComponent{ 

    // type car
selectedType:Type = new Type(1, 'Petrol');
types = [
     new Type(1, 'Petrol' ),
     new Type(2, 'Diesel' ),
     new Type(3, 'Electric' )
  ];

  // transmission car
selectedTransmission:Transmission = new Transmission(1, 'Manual');
transmissions = [
     new Transmission(1, 'Manual' ),
     new Transmission(2, 'Automatic' ),
     new Transmission(3, 'Semi-Automatic' )
  ];
    submitForm(form:any): void {
         console.log('Form Data: '); 
         console.log(form);
    }
}