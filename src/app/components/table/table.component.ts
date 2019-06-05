import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  _filtersValues: any = {};

   _settings: any ;
  get settings(): any {
    return this._settings;
  }
  @Input()
    set settings(value: any) {
      this._settings = value;
    }

  _dataSource: any[];
  _untouchedDataSource: any[] ;
  get dataSource(): any {
    return this._dataSource;
  }
  @Input()
    set dataSource(value: any) {
      this._dataSource = value;
      this._untouchedDataSource = value;
  }

  @Output() view = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();
  @Output() add = new EventEmitter<any>();
  @Output() save = new EventEmitter<any>();


  constructor() { }

  ngOnInit() {
  }


  doFilter(event: any , col: any) {
    this._filtersValues[col] = event.target.value ;
    this._dataSource = [];

    this._untouchedDataSource.map( row => {
      let matched = true;

      Object.keys(this._filtersValues).map( key => {
          matched =  JSON.stringify(row[key] === undefined ? '' : row[key] ).toLowerCase().indexOf(
            this._filtersValues[key] === undefined ? '' : this._filtersValues[key]) >= 0  && matched;
        });

        if (matched) { this._dataSource.push(row); }
      });
  }

  handleAddClick() {
    this.add.emit();
  }
  handleViewClick(row: any) {
    this.view.emit(row);
  }
  handleDeleteClick(row: any) {
    this.delete.emit(row);
  }
  handleSaveClick(row: any) {
    this.save.emit(row);
  }
}
