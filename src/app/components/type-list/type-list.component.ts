import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { ListItem } from 'src/app/Types';

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.css'],
})
export class TypeListComponent implements OnInit {
  types: ListItem[] = [];

  constructor(private apiService: ApiServiceService) {}

  ngOnInit(): void {
    this.apiService
      .getTypes()
      .subscribe((response) => (this.types = response.results));
  }
}
