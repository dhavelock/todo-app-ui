import { Component, OnInit, Input } from '@angular/core';
import { TodoApiService } from '../../services/todo-api.service';
import { List } from '../../models/list.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() list: List;

  constructor(private todoApi: TodoApiService) { }

  onDelete() {
    this.todoApi.deleteList(this.list.id)
    .subscribe(
      () => window.location.reload(),
      error => alert(error.error.message)
    );
  }
}
