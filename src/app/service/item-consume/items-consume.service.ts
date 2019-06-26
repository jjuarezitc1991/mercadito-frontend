import { Injectable } from '@angular/core';
import { Item } from 'src/app/domain/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsConsumeService {

  constructor() { }

  getItems(): Item[] {
    console.log('retrieving items');
    return [
      { id: 1, name: 'foo' },
      { id: 2, name: 'bar' },
      { id: 3, name: 'baz' }
    ];
  }
}
