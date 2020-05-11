import { Component, OnInit, Input } from '@angular/core';
import { TodoApiService } from '../../services/todo-api.service';
import { List } from '../../models/list.model';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() list: List;
  items: Item[];

  constructor(private todoApi: TodoApiService) { }

  ngOnInit() {
    this.todoApi.getUrl(this.list._links.items.href)
    .subscribe(res => {
      this.items = res['_embedded'].item;
    })
  }
}
