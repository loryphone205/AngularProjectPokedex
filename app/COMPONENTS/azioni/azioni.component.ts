import { CommonModule } from '@angular/common';
import { Component, Input, Output, forwardRef } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { PokeServiceService } from '../../SERVICES/poke-service.service';
import { Squadra } from '../../MODELS/Squadra';
import { EventEmitter } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-azioni',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
  ],
  templateUrl: './azioni.component.html',
  styleUrl: './azioni.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AzioniComponent),
      multi: true,
    },
  ],
})
export class AzioniComponent {
  //prendo la stringa di ingresso.
  @Input() indexPadre: number;
  @Input() squadraDiIngresso: Squadra[] = [];
  @Input() azioneDiIngresso: string = 'visualizza';

  //output della squadra modificata
  @Output() squadraDiRitorno = new EventEmitter<Squadra[]>();
  @Output() azioneDiRitorno = new EventEmitter<string>();

  //devo creare un form
  actionForm: FormGroup;
  nomiPokeForm: FormGroup;

  //ho bisogno anche della get dei pokemon, dato che mi devo prendere i dati per le select
  risultato: any[];

  //ho letto dell'esistenza dei form annidati, chissà se ci riesco
  constructor(
    private campiSquadra: FormBuilder,
    private nomiPoke: FormBuilder,
    private pokeService: PokeServiceService
  ) {
    this.actionForm = this.campiSquadra.group({
      nomeSquadra: ['', Validators.required],
      nomeTrainer: ['', Validators.required],
    });

    this.nomiPokeForm = this.nomiPoke.group({
      poke1: ['', Validators.required],
      poke2: ['', Validators.required],
      poke3: ['', Validators.required],
      poke4: ['', Validators.required],
      poke5: ['', Validators.required],
      poke6: ['', Validators.required],
    });
  }

  //ngoninit per la get
  ngOnInit() {
    this.pokeService.getPoke().subscribe({
      next: (result) => {
        console.log('Metodo andato a buon fine');
        this.risultato = Object.values(result['results']);
        console.log(this.risultato);
      },
      error: (error) => {
        console.log('Metodo non andato a buon fine', error);
      },
    });
  }

  //metodo inviaform
  inviaForm() {
    if (this.azioneDiIngresso === 'aggiungi') {
      //la mia logica è di prendere l'array di ingresso di squadre e aggiungere l'elemento e rispedirlo al padre aggiornato
      let tempSquadra: Squadra = {
        nomeSquadra: this.actionForm.value.nomeSquadra,
        nomeTrainer: this.actionForm.value.nomeTrainer,
        nomiPoke: [
          this.nomiPokeForm.value.poke1,
          this.nomiPokeForm.value.poke2,
          this.nomiPokeForm.value.poke3,
          this.nomiPokeForm.value.poke4,
          this.nomiPokeForm.value.poke5,
          this.nomiPokeForm.value.poke6,
        ],
      };
      console.log(tempSquadra);
      this.squadraDiIngresso.push(tempSquadra);
      console.table(this.squadraDiIngresso);
      this.squadraDiRitorno.emit(this.squadraDiIngresso);
      this.azioneDiRitorno.emit('visualizza');
    }

    if (this.azioneDiIngresso === 'modifica') {
      let tempSquadra: Squadra = {
        nomeSquadra: this.actionForm.value.nomeSquadra,
        nomeTrainer: this.actionForm.value.nomeTrainer,
        nomiPoke: [
          this.nomiPokeForm.value.poke1,
          this.nomiPokeForm.value.poke2,
          this.nomiPokeForm.value.poke3,
          this.nomiPokeForm.value.poke4,
          this.nomiPokeForm.value.poke5,
          this.nomiPokeForm.value.poke6,
        ],
      };
      console.log(this.indexPadre);
      this.squadraDiIngresso[this.indexPadre] = tempSquadra;
      this.squadraDiRitorno.emit(this.squadraDiIngresso);
      this.azioneDiRitorno.emit('visualizza');
    }
  }
}
