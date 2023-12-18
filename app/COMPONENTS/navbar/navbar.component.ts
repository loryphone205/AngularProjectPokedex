import { Component, EventEmitter, Output } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatCommonModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  //variabile titolo
  titolo: string = 'Homepage';

  constructor(private rotte: Router) {}

  //cabioRottahomePage
  cambioRottaHomepage() {
    this.rotte.navigate(['/homepage']);
    this.titolo = 'Homepage';
  }
  //cabioRottalista
  cambioRottaLista() {
    this.rotte.navigate(['/listaPokemon']);
    this.titolo = 'Lista Pokémon';
  }

  //cambio rotta Squadra
  cambioRottaSquadra() {
    this.rotte.navigate(['/squadraPokemon']);
    this.titolo = 'Squadra Pokémon';
  }
}
