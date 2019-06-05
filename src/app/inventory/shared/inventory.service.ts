import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  apiBase = 'https://invmansl.herokuapp.com' ; // 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  saveItem(item: any): Observable<any> {

    const data = {
     name:  item.name,
     code: item.code ,
     unit: item.unit ,
     quantity: item.quantity,
     price: item.price,
     descp: item.desc ,
     category: item.category
  };

   return this.http.post<any>(this.apiBase + '/inventory/add', data );
  }

  getItemList(): Observable<Item[]> {
    const data = {};
    return this.http.get<Item[]>(this.apiBase + '/inventory/items', data );
  }

  deleteItem(item: Item): Observable<Item[]> {
    const data = {};
    return this.http.get<Item[]>(this.apiBase + '/inventory/delete/' + item.id, data );
  }
  
}
