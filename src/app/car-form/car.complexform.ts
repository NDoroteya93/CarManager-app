import {Component } from '@angular/core';
import { Car} from '../car';

import{ FormBuilder, FormGroup} from '@angular/forms';

@Component({ 
    selector: 'complex-form', 

    templateUrl: './car.complexform.html'
})

export class ComplexFormComponent{ 
    complexForm: FormGroup;

    constructor(fb: FormBuilder){ 
        let car = new Car({
            'brand':   '',
            'model':  '',
            'description':   '',
            'registration_number': 'any',
            'fuelType':  '',
            'transmission': ''
        });
        this.complexForm = fb.group(car);
    }

    submitForm(value: any):void{ 
        console.log('Reactive Form Data');
        console.log(value);
    }
    
}