import { Component, OnInit, Input } from '@angular/core';
import { Pokemon, PokemonService } from '../services/pokemon.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-pokemon-page',
	templateUrl: './pokemon-page.component.html',
	styleUrls: [ './pokemon-page.component.scss' ]
})
export class PokemonPageComponent implements OnInit {
	pokemon: Pokemon;

	constructor(
		private route: ActivatedRoute,
		private pokemonService: PokemonService,
	) {}

	ngOnInit(): void { 
		this.route.paramMap.subscribe(params => {
		this.pokemon = this.pokemonService.getByID(+params.get('pokemonId'));
	  });}
}
