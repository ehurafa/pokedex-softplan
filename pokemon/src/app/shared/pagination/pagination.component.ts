import { Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() public active: number = 1;
  @Output() public emitNext: EventEmitter<string> = new EventEmitter();

  public pages = Array(10);

  public next(value: any){
    this.emitNext.emit(value + 1);
  }
}
