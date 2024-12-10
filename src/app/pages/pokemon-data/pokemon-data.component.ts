import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from '../../pipes/capitalize.pipe';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-data',
  standalone: true,
  imports: [CommonModule, CapitalizePipe],
  templateUrl: './pokemon-data.component.html',
  styleUrls: ['./pokemon-data.component.css'],
})
export class PokemonDataComponent implements OnInit {
  pokemonList: any[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemon(20).subscribe((data) => {
      const results = data.results;
      results.forEach((pokemon: any) => {
        this.pokemonService.getPokemonDetails(pokemon.url).subscribe((details) => {
          this.pokemonList.push({
            name: details.name,
            image: details.sprites.front_default, // Pokémon image
            abilities: details.abilities.map((a: any) => a.ability.name).join(', '), // Abilities
            types: details.types.map((t: any) => t.type.name).join(', '), // Types
          });
        });
      });
    });
  }
}
