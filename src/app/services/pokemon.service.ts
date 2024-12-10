import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon'; // Fixed the extra slash

  constructor(private http: HttpClient) {}

  getPokemon(limit: number = 1000): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}?limit=${limit}`);
  }

  getPokemonDetails(url: string): Observable<any> {
    return this.http.get<any>(url); // Fetch additional details
  }
}
