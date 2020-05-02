import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';
import { PokemonPageComponent } from './pokemon/pokemon-page/pokemon-page.component';
import { EditFormComponent } from './pokemon/edit-form/edit-form.component';
import { CancelGuard } from './pokemon/cancel.guard';
import { ConfirmGuard } from './pokemon/confirm.guard';

const routes: Routes = [
	{ path: '', component: PokemonListComponent },
	// { path: 'caught', component: PokemonCaughtListComponent },
	{
		path: 'edit/:pokemonId',
		component: EditFormComponent,
		canDeactivate: [ CancelGuard ]
	},
	{
		path: 'pokemons/:pokemonId',
		component: PokemonPageComponent,
	},
	{ path: '**', redirectTo: '/' }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ],
	providers: [ ConfirmGuard, CancelGuard ]
})
export class AppRoutingModule {}
