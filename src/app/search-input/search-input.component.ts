import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css'],
})
export class SearchInputComponent {
  @Input() label = 'Pesquisar por';
  @Output() search = new EventEmitter<string>();

  onSearch(term: string) {
    this.search.emit(term);
  }
}
