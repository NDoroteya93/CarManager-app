import { Injectable } from '@angular/core';
import { Car } from '../../car';
// import { LocalStorageService } from './car-data.service';

@Injectable()
export class CarDataService {

  // automatic incrementing of id's
  lastId: number = 0;

  // Placeholder for car's
  cars: Car[] = [];

  constructor(
    // private storageService: LocalStorageService
  ) { }

  // Аdd/Create
  addCar(car: Car) {
    if (!car.id) {
      car.id = ++this.lastId;
    }

    this.cars.push(car);

    return this;
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
