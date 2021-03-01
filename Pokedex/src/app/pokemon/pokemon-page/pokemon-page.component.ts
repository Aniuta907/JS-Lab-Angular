import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Pokemon, PokemonService } from '../services/pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-pokemon-page',
	templateUrl: './pokemon-page.component.html',
	styleUrls: [ './pokemon-page.component.scss' ],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonPageComponent implements OnInit {
	@Input() pokemon: Pokemon;
	@Output() onChanged = new EventEmitter<Pokemon>();

	constructor(
		private route: ActivatedRoute,
		private pokemonService: PokemonService,
	) {}

	ngOnInit(): void { 
		this.route.paramMap.subscribe(params => {
			this.pokemon = this.pokemonService.getByID(+params.get('pokemonId'));
	  });}

	catchPokemon() {
		this.onChanged.emit(this.pokemon);
	}
}
