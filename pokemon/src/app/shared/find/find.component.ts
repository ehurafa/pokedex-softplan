import { Component, EventEmitter, OnInit, Output  } from '@angular/core';

@Component({
  selector: 'find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
})
export class FindComponent {
  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();

  public search(value: string){
    console.log(value)
    this.emmitSearch.emit(value);
  }
}
