import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Pokemon } from '../services/pokemon.service';

@Component({
	selector: 'app-pokemon-card',
	templateUrl: './pokemon-card.component.html',
	styleUrls: [ './pokemon-card.component.scss' ],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonCardComponent implements OnInit {
	@Input() pokemon: Pokemon;
	@Output() onChanged = new EventEmitter<Pokemon>();

	constructor() {}

	ngOnInit(): void {}

	catchPokemon() {
		this.onChanged.emit(this.pokemon);
	  }
}
