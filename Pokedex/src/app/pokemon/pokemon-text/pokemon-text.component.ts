import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../pokemon-list/pokemon-list.component';

@Component({
	selector: 'app-pokemon-text',
	templateUrl: './pokemon-text.component.html',
	styleUrls: [ './pokemon-text.component.scss' ]
})
export class PokemonTextComponent implements OnInit {
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
