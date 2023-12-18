import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeServiceService {

   //variabile url
   private backEndUrl = "https://pokeapi.co/api/v2/pokemon?limit=${30}"

   constructor(private http: HttpClient) {
     //vuoto
   }
 
   //metodi
   //prende un dato
   getPoke(): Observable<any[]> {
     //logica per importare l'utente
 
     //sintassi: this.variabileCostruttore.get<tipo>(this.url)
     return this.http.get<any[]>(this.backEndUrl);
     //SOLO LA GET CI RESTITUISCE UN OGGETTO
   }
}
