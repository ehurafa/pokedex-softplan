import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.scss']
})
export class InfosComponent {

  @Input() externalName: string = '';
  @Input() favorite: boolean = false;

  public error: boolean = false;
  public pokemon: any = {};

  constructor(
    private pokemonsService: PokemonsService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  name = new FormControl('');
  description = new FormControl('');

  public onFavorite() {
    this.favorite = !this.favorite;
  }

  public edit() {
    this.router.navigate(['items'], { relativeTo: this.route });
  }

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
