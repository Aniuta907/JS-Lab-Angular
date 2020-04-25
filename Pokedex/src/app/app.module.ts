import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonModule } from './pokemon/pokemon.module';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';

const appRoutes: Routes = [
  { path: 'main', component: PokemonListComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    PokemonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
