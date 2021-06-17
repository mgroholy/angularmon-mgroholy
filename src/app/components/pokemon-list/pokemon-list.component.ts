import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { ListItem } from 'src/app/Types';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  pokemons: ListItem[] = [];
  previous: string = '';
  next: string = '';

  constructor(private apiService: ApiServiceService) {}

  ngOnInit(): void {
    this.apiService.getPokemons().subscribe((response) => {
      this.pokemons = response.results;
      this.previous = response.previous;
      this.next = response.next;
    });
  }

  switchPage(url: string): void {
    this.apiService.getPokemons(url).subscribe((response) => {
      this.pokemons = response.results;
      this.previous = response.previous;
      this.next = response.next;
    });
  }
}
