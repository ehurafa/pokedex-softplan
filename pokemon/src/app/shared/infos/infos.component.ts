import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.scss']
})
export class InfosComponent {

  @Input() externalName: string = '';

  public error: boolean = false;
  public favorite: boolean = false;
  public pokemon: any = {};

  constructor(
    private pokemonsService: PokemonsService
    ) { }

  name = new FormControl('');
  description = new FormControl('');


  ngOnInit() {
    this.pokemonsService.getPokemon(this.externalName).subscribe({
      next: (res) => {
        this.pokemon = res;
        this.name.setValue(String(res.name).toUpperCase( ));
      },
      error: (e) => this.error = true
    })
  }
}
