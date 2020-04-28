import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Pokemon, PokemonService } from '../services/pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditFormComponent implements OnInit {
  @Input() pokemon: Pokemon;

  constructor(	
    private route: ActivatedRoute, 
    private pokemonService: PokemonService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.pokemon = this.pokemonService.getByID(+params.get('pokemonId'));
	  });
  }

}
