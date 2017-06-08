import { Injectable } from '@angular/core';


@Injectable()
export class LocalStorageService {

  save(id, data) {

    let localData: any = localStorage.getItem('cars');
    if (localData) {
      localData = JSON.parse(localData);
    } else {
      localData = {};
      localData[id] = {};
    }

    localData[id] = data;

    localStorage.setItem('cars', JSON.stringify(localData))
  }

  get(id) {

    let data = JSON.parse(localStorage.getItem('cars'));
    console.log(data);
    if (!data) {
      return undefined;
    }
    if (name) {
      if (data[id]) {
        return data[id];
      } else {
        return {};
      }
    }
    return data;
  }

  remove() {

  }
}
