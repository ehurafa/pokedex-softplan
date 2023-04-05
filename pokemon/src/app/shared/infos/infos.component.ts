import { Component, Input, AfterContentInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';

import { PokemonsService } from 'src/app/services/pokemons.service';
import { PokemonState, addFavorite, removeFavorite } from 'src/app/store/app.state';

@Component({
  selector: 'infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.scss']
})
export class InfosComponent implements  AfterContentInit {

  @Input() externalName: string = '';

  public error: boolean = false;
  public pokemon: any = {};

  constructor(
    private pokemonsService: PokemonsService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<{ pokemon: PokemonState }>
    ) { }

  name = new FormControl('');
  description = new FormControl('');

  public externalFavorites: any = [];
  public favorite: boolean = false;

  public onFavorite() {
    if (this.favorite) {
      this.favorite = false;
      this.store.dispatch(removeFavorite({ id: this.pokemon.id }))
    } else {
      this.favorite = true;
      this.store.dispatch(addFavorite({ id: this.pokemon.id }))
    }
  }

  public edit() {
    this.router.navigate(['items'], { relativeTo: this.route });
  }

  public setFavorite(id: string | number) {
    if(this.externalFavorites.includes(id)) {
      this.favorite = true;
    } else {
      this.favorite = false;
    }
  }

  public getFavorite() {
    this.store.pipe(select('pokemon'))
          .subscribe(res => {
              this.externalFavorites = res.pokemon.favorites
          });
   }
  ngAfterContentInit() {
    this.pokemonsService.getPokemon(this.externalName).subscribe({
      next: (res) => {
        this.pokemon = res;
        this.name.setValue(String(res.name).toUpperCase( ));
        this.setFavorite(res.id);
      },
      error: (e) => this.error = true
    })
    this.getFavorite();
  }

}
