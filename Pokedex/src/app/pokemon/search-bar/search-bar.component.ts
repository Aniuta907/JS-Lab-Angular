import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
	selector: 'app-search-bar',
	templateUrl: './search-bar.component.html',
	styleUrls: [ './search-bar.component.scss' ]
})
export class SearchBarComponent implements OnInit {
	@Output() onChanged = new EventEmitter<string>();
	pokemonName = '';

	showSearchResults = false;

	constructor(private route: ActivatedRoute, private router: Router) {}

	ngOnInit(): void {
		this.route.queryParams.subscribe((params: Params) => {
			this.showSearchResults = !!params.showSearchResults;
		});

		this.route.fragment.subscribe((fragment) => {
			console.log('meow ', fragment);
		});
	}

	showResFunc() {
		this.router.navigate([ '/' ], {
			queryParams: {
				showSearchResults: true
			},
			fragment: this.pokemonName
		});
	}

	searchPokemon(): void {
		this.showResFunc();
		this.onChanged.emit(this.pokemonName);
	}
}
