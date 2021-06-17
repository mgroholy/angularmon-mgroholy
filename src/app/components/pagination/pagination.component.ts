import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  @Input() previous: string = '';
  @Input() next: string = '';
  @Output() switchPageEvent: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  previousPage() {
    this.switchPageEvent.emit(this.previous);
  }

  nextPage() {
    this.switchPageEvent.emit(this.next);
  }
}
