import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { ListItem, PokemonDetails } from 'src/app/Types';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css'],
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon: ListItem;
  pokemonDetails: PokemonDetails;

  constructor(
    private apiService: ApiServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.pokemon = { name: '', url: '' };
    this.pokemonDetails = {
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
  }

  ngOnInit(): void {
    this.apiService.getPokemonDetails(this.pokemon.url).subscribe((pokemon) => {
      this.pokemonDetails = pokemon;
    });
  }

  formatName(): string {
    return (
      this.pokemonDetails.name.charAt(0).toUpperCase() +
      this.pokemonDetails.name.substring(1)
    );
  }

  goToDetails(): void {
    this.router.navigate([this.pokemonDetails.id], { relativeTo: this.route });
  }
}
