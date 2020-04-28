import { Injectable } from '@angular/core';

export interface Pokemon {
	name: string;
	id: number;
	damage: number;
	isCaught?: boolean;
	birthdate: string;
}

@Injectable({
	providedIn: 'root'
})
export class PokemonService {
	pokemons: Pokemon[] = [
		{
			name: 'bulbasaur',
			id: 1,
			damage: 1,
			birthdate: '2020-01-01'
		},
		{
			name: 'ivysaur',
			id: 2,
			damage: 2,
			birthdate: '2020-01-02'
		},
		{
			name: 'venusaur',
			id: 3,
			damage: 333,
			birthdate: '2020-01-03'
		},
		{
			name: 'charmander',
			id: 4,
			damage: 4,
			birthdate: '2020-01-04'
		},
		{
			name: 'charmeleon',
			id: 5,
			damage: 55,
			birthdate: '2020-01-05'
		},
		{
			name: 'charizard',
			id: 6,
			damage: 67,
			birthdate: '2020-01-06'
		},
		{
			name: 'squirtle',
			id: 7,
			damage: 7,
			birthdate: '2020-01-07'
		},
		{
			name: 'wartortle',
			id: 8,
			damage: 8,
			birthdate: '2020-01-08'
		},
		{
			name: 'blastoise',
			id: 9,
			damage: 99,
			birthdate: '2020-01-09'
		},
		{
			name: 'caterpie',
			id: 10,
			damage: 0,
			birthdate: '2020-01-10'
		},
		{
			name: 'metapod',
			id: 11,
			damage: 11,
			birthdate: '2020-01-11'
		},
		{
			name: 'butterfree',
			id: 12,
			damage: 0,
			birthdate: '2020-01-12'
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

	filterByName(pokName: string): Pokemon[] {
		return this.pokemons.filter((pokemon: Pokemon) => pokemon.name.indexOf(pokName) !== -1);
	}
}
