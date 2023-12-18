// creo la mia classe squadra, composta da Nome Squadra, Nome Allenatore, Array di Nomi di Poke [6]
export class Squadra {

    nomeSquadra: string;
    nomeTrainer: string;
    nomiPoke: string [];

    //costruttore
    constructor (nomeSquadra: string, nomeTrainer: string, nomiPoke: string[]) {
        this.nomeSquadra = nomeSquadra;
        this.nomeTrainer = nomeTrainer;
        this.nomiPoke = nomiPoke;
    }
}