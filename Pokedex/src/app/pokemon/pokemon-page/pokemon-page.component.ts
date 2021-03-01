import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../services/pokemon.service';

@Component({
	selector: 'app-pokemon-page',
	templateUrl: './pokemon-page.component.html',
	styleUrls: [ './pokemon-page.component.scss' ]
})
export class PokemonPageComponent implements OnInit {
	@Input() pokemon: Pokemon;

	constructor() {}

	ngOnInit(): void {}
}
