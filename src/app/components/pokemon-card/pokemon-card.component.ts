import { Component, OnInit, Input } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { Pokemon, PokemonDetails } from 'src/app/Types';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css'],
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon: Pokemon;
  pokemonDetails: PokemonDetails;

  constructor(private apiService: ApiServiceService) {
    this.pokemon = { name: '', url: '' };
    this.pokemonDetails = {
      name: '',
      height: 0,
      weight: 0,
      id: 0,
      sprites: {
        front_default: '',
        other: {
          official_artwork: {
            front_default: '',
          },
        },
      },
    };
  }

  ngOnInit(): void {
    this.apiService.getPokemonDetails(this.pokemon.url).subscribe((pokemon) => {
      this.pokemonDetails = pokemon;
      console.log(pokemon);
    });
  }

  formatName(): string {
    return (
      this.pokemonDetails.name.charAt(0).toUpperCase() +
      this.pokemonDetails.name.substring(1)
    );
  }
}
