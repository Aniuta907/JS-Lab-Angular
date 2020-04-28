import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';
import { PokemonPageComponent } from './pokemon/pokemon-page/pokemon-page.component';
import { EditFormComponent } from './pokemon/edit-form/edit-form.component';

const routes: Routes = [
	{ path: '', component: PokemonListComponent },
	// { path: 'caught', component: PokemonCaughtListComponent },
	{ path: 'edit/:pokemonId', component: EditFormComponent },
	{ path: 'pokemons/:pokemonId', component: PokemonPageComponent },
	{ path: '**', redirectTo: '/' }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
