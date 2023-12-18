import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Squadra } from '../../MODELS/Squadra';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AzioniComponent } from '../azioni/azioni.component';

@Component({
  selector: 'app-squadra-pokemon',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    AzioniComponent,
  ],
  templateUrl: './squadra-pokemon.component.html',
  styleUrl: './squadra-pokemon.component.css',
})
export class SquadraPokemonComponent {
  //creo la mia variabile per la stringa dell'invia form
  azioneSquadraPokemon: string = 'visualizza';

  //index
  index = 0;

  displayedColumns: string[] = [
    'Nome Allenatore',
    'Nome Squadra',
    'Squadra Pokémon',
    'Azioni',
  ];

  //qui mi creo la lista di Squadre, dopotutto serve solo ad azioni, figlio di lista e a Saqudra
  squadre: Squadra[] = [];

  //constructor
  constructor() {}

  //mi prendo l'evento dell'invio
  cambiaVisualizzazione(value: any) {
    this.azioneSquadraPokemon = value;
  }

  //cambia form di aggiungi
  cambiaFormAggiungi() {
    this.azioneSquadraPokemon = 'aggiungi';
  }

  cambiaFormModifica(i: number) {
    this.azioneSquadraPokemon = 'modifica';
    this.index = i;
  }

  aggioraSquadre(value: any[]) {
    this.squadre = value;
  }

  //delete
  elimina(i: number) {
    this.squadre = this.squadre.filter((squadra) => squadra != this.squadre[i]);
  }
}
