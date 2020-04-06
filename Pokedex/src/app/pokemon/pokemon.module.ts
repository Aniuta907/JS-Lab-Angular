import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonPageComponent } from './pokemon-page/pokemon-page.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PokemonTextComponent } from './pokemon-text/pokemon-text.component';
import { RedBorderDirective } from './directives/pokemon-card-border.directive';
import { PokemonService } from './services/pokemon.service';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
	declarations: [
		HeaderComponent,
		PokemonCardComponent,
		PokemonPageComponent,
		PokemonListComponent,
		PaginationComponent,
		PokemonTextComponent,
		RedBorderDirective,
		SearchBarComponent
	],
	imports: [ CommonModule ],
	exports: [
		PokemonPageComponent,
		HeaderComponent,
		PokemonCardComponent,
		PokemonListComponent,
		PaginationComponent,
		PokemonTextComponent,
		SearchBarComponent
	],
	providers: [PokemonService]
})
export class PokemonModule {}
