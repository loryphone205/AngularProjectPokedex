import { Routes } from '@angular/router';
import { HomepageComponent } from './COMPONENTS/homepage/homepage.component';
import { ListaPokemonComponent } from './COMPONENTS/lista-pokemon/lista-pokemon.component';
import { SquadraPokemonComponent } from './COMPONENTS/squadra-pokemon/squadra-pokemon.component';

export const routes: Routes = [
    { path: "homepage", component: HomepageComponent },
    { path: "listaPokemon", component: ListaPokemonComponent },
    { path: "squadraPokemon", component: SquadraPokemonComponent },
    { path: "", redirectTo: "/homepage", pathMatch: 'full' }
];
