import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { PokeServiceService } from '../../SERVICES/poke-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-pokemon',
  standalone: true,
  imports: [MatTableModule, HttpClientModule, CommonModule],
  templateUrl: './lista-pokemon.component.html',
  styleUrl: './lista-pokemon.component.css',
})
export class ListaPokemonComponent {
  //risultato back, così faccio il match con la table
  dataSource: any[];

  displayedColumns: string[] = ['Posizione', 'Nome'];

  constructor(private pokeService: PokeServiceService) {
    //vuoto
  }

  //metodo get on init
  ngOnInit() {
    this.pokeService.getPoke().subscribe({
      next: (result) => {
        console.log('Metodo andato a buon fine');
        this.dataSource = Object.values(result['results']);
        console.log(this.dataSource);
      },
      error: (error) => {
        console.log('Metodo non andato a buon fine', error);
      },
    });
  }
}
