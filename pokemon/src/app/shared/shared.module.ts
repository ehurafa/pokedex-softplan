import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { HeaderComponent } from './header/header.component';
import { InfosComponent } from './infos/infos.component';
import { FindComponent } from './find/find.component';
import { PaginationComponent } from './pagination/pagination.component';
import { EmptyComponent } from './empty/empty.component';

@NgModule({
  declarations: [
    HeaderComponent,
    InfosComponent,
    FindComponent,
    PaginationComponent,
    EmptyComponent
  ],
  exports: [HeaderComponent, InfosComponent, FindComponent, PaginationComponent, EmptyComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class SharedModule { }
