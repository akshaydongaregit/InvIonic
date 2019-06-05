import { Component, OnInit, Optional } from '@angular/core';
import { InventoryService } from '../../shared/inventory.service';
import { Item } from '../../models/item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

   invList: Item[] = [] ;
   mockList: Item[] = [
    {
      id: 1,
      code: 'P1',
      name: 'Rice',
      price: 90,
      unit: 'Kilo',
      quantity: 100,
      category: '',
      desc: ''
    } ,
    {
      id: 2,
      code: 'P2',
      name: 'Wheet',
      price: 70,
      unit: 'Kilo',
      quantity: 100,
      category: '',
      desc: ''
    }
  ];

  settings = {
    cols : [
      {
        title: 'Id' ,
        width: '10px' ,
        value: 'id' ,
        filter: false
      } ,
      {
        title: 'Code' ,
        width: '10px' ,
        value: 'code' ,
        filter: true
      } ,
      {
        title: 'Name' ,
        width: '10px' ,
        value: 'name' ,
        filter: true
      } ,
      {
        title: 'Price' ,
        width: '10px' ,
        value: 'price' ,
        filter: true
      } ,
      {
        title: 'Unit' ,
        width: '10px' ,
        value: 'unit' ,
        filter: true
      } ,
      {
        title: 'Quantity' ,
        width: '10px' ,
        value: 'id' ,
        filter: true
      }
    ] ,
  };

  idCnt = 2;

  constructor( private invs: InventoryService, private  route: Router ) {
  }

  ngOnInit() {
    this.fetchAndUpdateList();
  }


  addItem() {

   this.invList.push(
      {
        id: null ,
        code: 'P' ,
        name: '',
        price: 0,
        unit: '',
        quantity: 0,
        category: '',
        desc: ''
      }
    );

  }

  saveItem(item: Item) {
      console.log('saving : ' + JSON.stringify(item));
      this.invs.saveItem(item).subscribe(res => console.log(JSON.stringify(res)) );
    }

  fetchAndUpdateList() {
      this.invList = [];
      this.invs.getItemList().subscribe(res => { console.log('res : ' + JSON.stringify(res));
        this.invList = this.invList.concat(res);
      });
      //this.invList = this.mockList;
  }

  deleteItem(item: Item) {
    console.log('deleting : ' + JSON.stringify(item));
    this.invs.deleteItem(item).subscribe(res => console.log(JSON.stringify(res)) );
  }

  viewItem(item: Item) {
    console.log('viewing : ' + JSON.stringify(item));
    this.route.navigate(['/inventory/edit/' + item.id]);
  }

}
