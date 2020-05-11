import { Component, OnInit } from '@angular/core';
import { List } from '../../models/list.model';
import { TodoApiService } from '../../services/todo-api.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  lists: List[];

  constructor(private todoApi: TodoApiService) { }

  ngOnInit(): void {
    this.todoApi.getLists()
    .subscribe((response: List[]) => this.lists = response);
  }
}
