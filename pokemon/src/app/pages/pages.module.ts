import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent
  ],
  exports: [HomeComponent, DetailsComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
