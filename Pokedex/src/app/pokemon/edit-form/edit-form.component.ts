import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Pokemon, PokemonService } from '../services/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { ComponentCanDeactivate } from '../cancel.guard';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-edit-form',
	templateUrl: './edit-form.component.html',
	styleUrls: [ './edit-form.component.scss' ],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditFormComponent implements OnInit, ComponentCanDeactivate {
	@Input() pokemon: Pokemon;

	isCanceled = false;
	cancel() {
		this.isCanceled = true;
	}

	save() {
		this.isCanceled = false;
	}

	canDeactivate(): boolean | Observable<boolean> {
		if (this.isCanceled) {
			return confirm('Вы хотите покинуть страницу без сохранения? Ваши данные будут потеряны');
		} else {
			return true;
		}
	}

	constructor(private route: ActivatedRoute, private pokemonService: PokemonService) {}

	ngOnInit(): void {
		this.route.paramMap.subscribe((params) => {
			this.pokemon = this.pokemonService.getByID(+params.get('pokemonId'));
		});
	}
}
