import { Component, OnInit } from '@angular/core';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';

@Component({
  selector: 'app-pokemon-text',
  templateUrl: './pokemon-text.component.html',
  styleUrls: ['./pokemon-text.component.scss']
})
export class PokemonTextComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
