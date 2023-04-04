import { Component, OnInit } from '@angular/core';

import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private allPokemons: any;
  public getAllPokemons: any;
  public error: boolean = false;
  public pageNumber: any = 1;
  public empty: boolean = false;

  constructor(private pokemonsService: PokemonsService) { }

  public pokemons: any = [];

  ngOnInit() {
   this.getPokemons(1);
  }

  public getPokemons(offset: number){
    this.pokemonsService.getPokemons(offset).subscribe({
      next: (res) => {
        const { results } = res
        console.log('RES ', results);
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
    console.log(this.getAllPokemons.length)
  }

  public nextPage(page: any) {
    this.getPokemons(page);
    this.setPageNumber(page)
  }

  public setPageNumber(page: number | string) {
    this.pageNumber = page;
  }
}
