import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { HeaderComponent } from './header/header.component';
import { InfosComponent } from './infos/infos.component';
import { FindComponent } from './find/find.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    HeaderComponent,
    InfosComponent,
    FindComponent,
    PaginationComponent
  ],
  exports: [HeaderComponent, InfosComponent, FindComponent, PaginationComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
