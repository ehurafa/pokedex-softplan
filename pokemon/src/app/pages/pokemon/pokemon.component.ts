import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit  {

  public id: string = '';
  public pokemon: any = {};

  constructor(
    private pokemonsService: PokemonsService,
    private route: ActivatedRoute) {  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id']
   });

    this.pokemonsService.getPokemon(this.id).subscribe({
      next: (res) => {
        this.pokemon = res;
      }
    })
  }

}
