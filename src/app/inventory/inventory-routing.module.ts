import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryComponent } from './inventory.component';
import { AddComponent } from './pages/add/add.component';
import { ListComponent } from './pages/list/list.component';
import { EditComponent } from './pages/edit/edit.component';

const routes: Routes = [
  { path: '' , component: InventoryComponent } ,
  { path: 'list' , component: ListComponent } ,
  { path: 'new' , component: AddComponent } ,
  { path: 'edit/{id}' , component: EditComponent } ,
  { path: '**' , redirectTo: '' , pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
