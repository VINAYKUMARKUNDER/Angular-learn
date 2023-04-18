import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchValue:string = '';

  @Output() searchTextEmitter: EventEmitter<string> = new EventEmitter<string>();

  onSrarchTextChanges(){
    this.searchTextEmitter.emit(this.searchValue);
  }

}
