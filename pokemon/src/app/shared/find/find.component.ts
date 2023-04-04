import { Component, EventEmitter, OnInit, Output  } from '@angular/core';

@Component({
  selector: 'find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
})
export class FindComponent {
  @Output() public emitSearch: EventEmitter<string> = new EventEmitter();

  public search(value: string){
    this.emitSearch.emit(value);
  }
}
