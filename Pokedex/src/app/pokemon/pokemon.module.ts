import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonPageComponent } from './pokemon-page/pokemon-page.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PokemonTextComponent } from './pokemon-text/pokemon-text.component';
import { RedBorderDirective } from './directives/pokemon-card-border.directive';
import { PokemonService } from './services/pokemon.service';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { RouterModule } from '@angular/router';
import { EditFormComponent } from './edit-form/edit-form.component';

@NgModule({
	declarations: [
		PokemonCardComponent,
		PokemonPageComponent,
		PokemonListComponent,
		PaginationComponent,
		PokemonTextComponent,
		RedBorderDirective,
		EditFormComponent,
		SearchBarComponent
	],
	imports: [ CommonModule, RouterModule, FormsModule ],
	exports: [
		PokemonPageComponent,
		PokemonCardComponent,
		PokemonListComponent,
		PaginationComponent,
		PokemonTextComponent,
		EditFormComponent,
		SearchBarComponent
	],
	providers: [ PokemonService ]
})
export class PokemonModule {}
