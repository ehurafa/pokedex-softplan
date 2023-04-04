import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { InfosComponent } from './infos/infos.component';
import { FindComponent } from './find/find.component';

@NgModule({
  declarations: [
    HeaderComponent,
    InfosComponent,
    FindComponent
  ],
  exports: [HeaderComponent, InfosComponent, FindComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
