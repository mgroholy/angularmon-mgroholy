import { Component, Input, OnInit } from '@angular/core';
import { ListItem } from 'src/app/Types';

@Component({
  selector: 'app-type-card',
  templateUrl: './type-card.component.html',
  styleUrls: ['./type-card.component.css'],
})
export class TypeCardComponent implements OnInit {
  @Input() type: ListItem;

  constructor() {
    this.type = {
      name: '',
      url: '',
    };
  }

  ngOnInit(): void {}
}
