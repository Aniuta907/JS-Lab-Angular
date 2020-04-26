import { Injectable } from '@angular/core';

export interface Pokemon {
	name: string;
	id: number;
	damage: number;
	isCaught?: boolean;
}

@Injectable({
	providedIn: 'root'
})

export class PokemonService {
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

	constructor() {}

	public getAll() {
		return this.pokemons;
	}

	public getByName(name: string) {
		return this.pokemons.filter((pokemon) => pokemon.name === name);
	}

	public getByID(id: number): Pokemon {
		return this.pokemons.find((pokemon: Pokemon) => pokemon.id === id);
	}
}
