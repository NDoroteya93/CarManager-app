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
      localData = [];
      localData[car.id] = {};
    }

    localData.push(car);
    localStorage.setItem('cars', JSON.stringify(localData));

    return this;
  }

  getAllCars() {
    let data = JSON.parse(localStorage.getItem('cars'));
    return data;
  }

  // Update/ Edit
  updateCar(id: number, value: Object = {}) {
    let localData: any = localStorage.getItem('cars');

    if(localData){ 
      localData = JSON.parse(localData);
    }

    localData.forEach((car)=> {
      if(car.id === id){ 
        Object.assign(car, value);
      }
    }); 
    
    localStorage.setItem('cars', JSON.stringify(localData));
  }

  // Delete 
  deleteCar(id: number) {
     let localData: any = localStorage.getItem('cars');
    if(localData){ 
      localData = JSON.parse(localData);
    }

    localData = localData.filter((car) => car.id !== id);
    
    localStorage.setItem('cars', JSON.stringify(localData));
    return this;
  }

  getCarById(id:number){ 
    let localData: any = localStorage.getItem('cars');

    if(localData){ 
      localData = JSON.parse(localData);
    }
    return localData
      .filter(car => car.id === id);
  }
}
