import { Component, OnInit, Input } from '@angular/core';

import { Pokemon, PokemonService } from '../services/pokemon.service';

@Component({
	selector: 'app-pokemon-list',
	templateUrl: './pokemon-list.component.html',
	styleUrls: [ './pokemon-list.component.scss' ]
})
export class PokemonListComponent implements OnInit {
	textView = false;

	public pokemons;

	constructor(private pokemonService: PokemonService) {}

	ngOnInit(): void {
		this.pokemons = this.pokemonService.getAll();
	}

	switchView(): void {
		this.textView = !this.textView;
	}

	searchPokemon() {}

	onChanged(pokemon: Pokemon) {
		pokemon.isCaught = !pokemon.isCaught;
		if (pokemon.isCaught) {
			console.log('Pokemon ' + pokemon.name + ' is caught');
		} else {
			console.log('Pokemon ' + pokemon.name + ' is free');
		}
	}
}
