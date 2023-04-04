import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.scss']
})
export class InfosComponent {
  @Input() pokemon: any;

  name = new FormControl('');
  description = new FormControl('');

  public favorite: boolean = false;

}
