import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';
import { InventoryService } from '../../shared/inventory.service';
import { SweetPopupService } from 'src/app/components/sweetpopup/sweet-popup.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  _item: Item = {
    id: null ,
    code: '' ,
    name: '' ,
    price: 0 ,
    unit: '' ,
    quantity: 0 ,
    category: '' ,
    desc: ''
  };

  constructor(private invs: InventoryService , private popup: SweetPopupService) { }

  ngOnInit() {
  }

  handleSave() {
    if ( this._item.id == null) {
      console.log('saving : ' + JSON.stringify(this._item));
      this.invs.saveItem(this._item).subscribe(res => {
        this.showResult(res , 'Inserted SuccessFully!');
      } );
    } else {
      console.log('updating : ' + JSON.stringify(this._item));
        this.invs.updateItem(this._item).subscribe(res => {
        this.showResult(res, 'Updated SuccessFully!');
      });
    }
  }

 showResult(result: any, desc: string) {
   console.log('result' + JSON.stringify( result));
   this.popup.showSuccessPopup({ title: 'Success' , desc: desc });
 }

}
