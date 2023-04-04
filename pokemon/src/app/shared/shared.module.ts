import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { InfosComponent } from './infos/infos.component';



@NgModule({
  declarations: [
    HeaderComponent,
    InfosComponent
  ],
  exports: [HeaderComponent, InfosComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
