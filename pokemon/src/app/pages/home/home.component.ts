import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { map } from 'rxjs';

import { PokemonsService } from 'src/app/services/pokemons.service';
import { PokemonState } from 'src/app/store/app.state';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterContentInit {

  private allPokemons: any;
  public getAllPokemons: any;
  public error: boolean = false;
  public pageNumber: any = 1;
  public empty: boolean = false;

  constructor(
    private pokemonsService: PokemonsService,
    private store: Store<{ pokemon: PokemonState }>
    ) { }

  public pokemons: any = [];

  public favorites: any = [];

  public getPokemons(offset: number){
    this.pokemonsService.getPokemons(offset).subscribe({
      next: (res) => {
        const { results } = res
        this.allPokemons = res.results;
        this.getAllPokemons = this.allPokemons;
      },
      error: (e) => this.error = true
    })
  }

  public search(value: string){
    const filter = this.allPokemons.filter( (res: any ) => {
      return !res.name.indexOf(value.toLowerCase());
    });   
    this.getAllPokemons = filter;
    filter.length ? this.empty = false : this.empty = true;
  }

  public nextPage(page: any) {
    this.getPokemons(page);
    this.setPageNumber(page)
  }

  public setPageNumber(page: number | string) {
    this.pageNumber = page;
  }

  public getFavorite() {
    this.store.pipe(select('pokemon'))
        .subscribe(res => {
            this.favorites = res.pokemon.favorites
        });   
   }

   ngOnInit() {
    this.getPokemons(1);
   }
 
   ngAfterContentInit() {
     this.getFavorite();
   }
 


}
