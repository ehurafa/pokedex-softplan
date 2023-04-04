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
    // this.getPokemons();
    this.pokemonsService.getPokemons().subscribe({
      next: (res) => {
        this.allPokemons = res.results;
        this.getAllPokemons = this.allPokemons;
      },
      error: (e) => this.error = true
    })
  }

  public getPokemons(offset: number){
    const allPokemons = this.pokemonsService.getPokemons(offset).subscribe(res => {
      console.log('res', res)
      this.pokemons = res.results;
    })   
  }

  public search(value: string){
    console.log('>> ', value)
    const filter = this.allPokemons.filter( (res: any ) => {
      console.log('allPokemons ', res)
      return !res.name.indexOf(value.toLowerCase());
    });

   
    this.getAllPokemons = filter;
  }
}
