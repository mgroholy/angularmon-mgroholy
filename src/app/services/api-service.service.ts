import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse, PokemonDetails } from '../Types';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  getPokemons(url?: string): Observable<ApiResponse> {
    if (url) {
      return this.httpClient.get<ApiResponse>(url);
    }
    return this.httpClient.get<ApiResponse>(`${this.apiUrl}/pokemon`);
  }

  getPokemonDetails(url: string): Observable<PokemonDetails> {
    return this.httpClient.get<PokemonDetails>(url);
  }

  getPokemonDetailsById(id: number): Observable<PokemonDetails> {
    return this.httpClient.get<PokemonDetails>(`${this.apiUrl}/pokemon/${id}`);
  }

  getTypes(): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(`${this.apiUrl}/type`);
  }
}
