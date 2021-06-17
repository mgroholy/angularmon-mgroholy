import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { PokemonDetails } from 'src/app/Types';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css'],
})
export class PokemonDetailsComponent implements OnInit {
  id: string | null = null;

  pokemonDetails: PokemonDetails = {
    name: '',
    height: 0,
    weight: 0,
    id: 0,
    sprites: {
      front_default: '',
      other: {
        'official-artwork': {
          front_default: '',
        },
      },
    },
  };

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiServiceService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => (this.id = paramMap.get('id')));
    if (this.id !== null) {
      this.apiService
        .getPokemonDetailsById(parseInt(this.id))
        .subscribe((pokemon) => (this.pokemonDetails = pokemon));
    }
  }
}
