import { Injectable } from '@angular/core';
import { Car } from '../../car';
import { IdGenerator } from '../id-generator';

@Injectable()
export class CarDataService {

  // automatic incrementing of id's
  lastId: number = 0;

  // Placeholder for car's
  cars: Car[] = [];

  constructor(
  ) { }

  // Аdd/Create
  addCar(car: Car) {
    // increment id
    if (!car.id) {
      car.id = new IdGenerator().generate();
    }

    // Save to localStorage
    let localData: any = localStorage.getItem('cars');
    if (localData) {
      localData = JSON.parse(localData);
    } else {
      localData = {};
      localData[car.id] = {};
    }

    localData[car.id] = car;
    localStorage.setItem('cars', JSON.stringify(localData));

    return this;
  }

  getAllCars() {
    let data = JSON.parse(localStorage.getItem('cars'));
    return data;
  }

  // Update/ Edit
  updateCar(id: number, value: Object = {}) {

  }

  // Delete 
  deleteCar(id: number) {
    let car: number;

    this.cars = this.cars.filter((car) => car.id !== id);

    return this;

  }
}
