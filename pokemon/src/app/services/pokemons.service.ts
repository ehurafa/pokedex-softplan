import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

import { environment } from '../../environments/environment';
import { Pokemons, PokemonDetails } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  api: string | any;

  constructor(private http: HttpClient) { 
    this.api = environment.BASE_URL;
  }

  getPokemons(offset: number | string = 1):Observable<Pokemons> {
    return this.http.get<Pokemons>(`${this.api}/pokemon/?offset=${offset}&limit=10`).pipe(
      map(res => {
        return res
      })
    )
  }

  getPokemon(name: string):Observable<any> {
    return this.http.get<any>(`${this.api}/pokemon/${name}`).pipe(
      map(res => {
        return res
      })
    )
  }

  getPokemonDetails(name: string): Observable<PokemonDetails> {
    return this.http
      .get<PokemonDetails>(`${this.api}/${name}`)
  }

}
