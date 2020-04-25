import { Component, OnInit, Input } from '@angular/core';

export interface Pokemon {
	name: string;
	id: number;
	damage: number;
	isCaught?: boolean;
}

@Component({
	selector: 'app-pokemon-list',
	templateUrl: './pokemon-list.component.html',
	styleUrls: [ './pokemon-list.component.scss' ]
})
export class PokemonListComponent implements OnInit {
	pokemons: Pokemon[] = [
		{
			name: 'bulbasaur',
			id: 1,
			damage: 1
		},
		{
			name: 'ivysaur',
			id: 2,
			damage: 2
		},
		{
			name: 'venusaur',
			id: 3,
			damage: 333
		},
		{
			name: 'charmander',
			id: 4,
			damage: 4
		},
		{
			name: 'charmeleon',
			id: 5,
			damage: 55
		},
		{
			name: 'charizard',
			id: 6,
			damage: 67
		},
		{
			name: 'squirtle',
			id: 7,
			damage: 7
		},
		{
			name: 'wartortle',
			id: 8,
			damage: 8
		},
		{
			name: 'blastoise',
			id: 9,
			damage: 99
		},
		{
			name: 'caterpie',
			id: 10,
			damage: 0
		},
		{
			name: 'metapod',
			id: 11,
			damage: 11
		},
		{
			name: 'butterfree',
			id: 12,
			damage: 0
		}
	];

	textView = false;

	constructor() {}

	ngOnInit(): void {}

	switchView(): void {
		this.textView = !this.textView;
	}

	onChanged(pokemon: Pokemon) {
		pokemon.isCaught = !pokemon.isCaught;
		if (pokemon.isCaught) {
			console.log('Pokemon ' + pokemon.name + ' is caught');
		} else {
			console.log('Pokemon ' + pokemon.name + ' is free');
		}
	}
}
