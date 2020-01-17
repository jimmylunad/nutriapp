import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {

  constructor() { }

  setValue (property, value): void {
    localStorage.setItem(property, value);
  }

  getValue (property): string {
    return localStorage.getItem(property);
  }

  setObject (name: string, object: object) {
    const aux = JSON.stringify(object);
    localStorage.setItem(name, aux);
  }

  getObject (name: string): object {
    const aux = localStorage.getItem(name);
    return JSON.parse(aux);
  }
}
