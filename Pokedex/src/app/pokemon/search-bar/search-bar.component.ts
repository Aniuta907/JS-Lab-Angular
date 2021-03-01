import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Output() onChanged = new EventEmitter<string>();
  pokemonName = '';

  constructor() { }

  ngOnInit(): void {
  }

  searchPokemon(): void {
    this.onChanged.emit(this.pokemonName);
  }

}
