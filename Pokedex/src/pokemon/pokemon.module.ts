import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonPageComponent } from './pokemon-page/pokemon-page.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PaginationComponent } from './pagination/pagination.component';



@NgModule({
  declarations: [HeaderComponent, PokemonCardComponent, PokemonPageComponent, PokemonListComponent, PaginationComponent],
  imports: [
    CommonModule
  ]
})
export class PokemonModule { }
