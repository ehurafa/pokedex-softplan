import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingModule } from './routing.module';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home/home.component';
import { PokemonComponent } from './pokemon/pokemon.component';
@NgModule({
  declarations: [
    HomeComponent,
    PokemonComponent
  ],
  exports: [HomeComponent, PokemonComponent],
  imports: [
    CommonModule,
    SharedModule,
    RoutingModule
  ]
})
export class PagesModule { }
