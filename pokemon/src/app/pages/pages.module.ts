import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RoutingModule } from './routing.module';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home/home.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { EditComponent } from './edit/edit.component';
@NgModule({
  declarations: [
    HomeComponent,
    PokemonComponent,
    EditComponent
  ],
  exports: [HomeComponent, PokemonComponent],
  imports: [
    CommonModule,
    SharedModule,
    RoutingModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
