import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PokemonDataComponent } from './pages/pokemon-data/pokemon-data.component';
import { FormComponent } from './pages/form/form.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pokemon-data', component: PokemonDataComponent },
  { path: 'form', component: FormComponent },
];
