import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../pokemon-list/pokemon-list.component';

@Component({
	selector: 'app-pokemon-card',
	templateUrl: './pokemon-card.component.html',
	styleUrls: [ './pokemon-card.component.scss' ]
})
export class PokemonCardComponent implements OnInit {
	@Input() pokemon: Pokemon;
	caught = false;

	constructor() {}

	ngOnInit(): void {}

	catchPokemon() {
		this.caught = !this.caught;
		if (this.caught) {
			console.log(this.pokemon.name + ' is caught');
		} else {
			console.log(this.pokemon.name + ' is free');
		}
	}
}
