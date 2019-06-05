import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './inventory.component';
import { ItemComponent } from './components/item/item.component';
import { AddComponent } from './pages/add/add.component';
import { ListComponent } from './pages/list/list.component';
import { EditComponent } from './pages/edit/edit.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from '../components/table/table.module';

@NgModule({
  imports: [
    CommonModule,
    InventoryRoutingModule,
    FormsModule,
    HttpClientModule ,
    TableModule
  ],
  declarations: [
    InventoryComponent,
    ItemComponent,
    AddComponent,
    ListComponent,
    EditComponent
  ]
})
export class InventoryModule { }
