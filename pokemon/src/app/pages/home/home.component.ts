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

  constructor(private pokemonsService: PokemonsService) { }

  public pokemons: any = [];

  ngOnInit() {
   this.getPokemons();
  }

  public getPokemons(){
    this.pokemonsService.getPokemons().subscribe({
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
  }
}
