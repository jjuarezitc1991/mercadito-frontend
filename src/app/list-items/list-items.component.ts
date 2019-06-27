import { Component, OnInit } from '@angular/core';
import { Item } from '../domain/item';
import { ItemsConsumeService } from '../service/item-consume/items-consume.service';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  items: Item [];

  constructor(private itemService: ItemsConsumeService) { }

  ngOnInit() {
    console.log('ngOnInit');
    this.items = this.itemService.getItems();
  }

}
