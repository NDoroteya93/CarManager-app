import { Component, OnInit } from '@angular/core';
import { CarDataService } from '../core/service/car-data.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements OnInit {
  carDetails = new Array();

  constructor(
    private carService: CarDataService,
  ) { }

  ngOnInit() {
    this.carDetails = this.carService.getAllCars();
  }

}
